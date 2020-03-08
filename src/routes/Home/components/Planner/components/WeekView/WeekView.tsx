import React, { Component } from 'react';
import { FiCalendar, FiTrash } from 'react-icons/fi';
import { Classes } from 'jss';
import Select from 'react-select';
import { DateTime } from 'luxon';

import { Text, Button } from '../../../../../../common'
import brackets, { Bracket } from '../../../../../../data/brackets';
import ranks, { Rank } from '../../../../../../data/ranks';
import { selectStyles } from './styles';

interface Week {
  bracket: Bracket
  startRp: number;
  endRp: number;
}

interface IWeekViewProps {
  classes: Classes
  startingRank: Rank;
}

interface IWeekViewState {
  weeks: Array<Week>;
}

export default class WeekView extends Component<IWeekViewProps, IWeekViewState> {
  static getDerivedStateFromProps (props: IWeekViewProps, state: IWeekViewState) {
    const firstWeek: Week = {
      bracket: brackets[0],
      startRp: props.startingRank.newRp,
      endRp: (props.startingRank.newRp * 0.8) + brackets[0].rp
    };

    if (!state.weeks.length) return { weeks: [firstWeek] };

    if (props.startingRank.newRp !== state.weeks[0].startRp) {
      const snapshot = state.weeks.slice();

      snapshot[0].startRp = props.startingRank.newRp;
      snapshot[0].endRp = (props.startingRank.newRp * 0.8) + snapshot[0].bracket.rp;

      return {
        weeks: snapshot
      }
    }

    return null;
  }

  constructor(props: IWeekViewProps) {
    super(props)

    this.state = {
      weeks: []
    }
  }

  getRankByRp = (rp: number) => ranks.find(rank => rank.baseRp < rp)
  
  getRankProgressByRp = (rp: number) => {
    const rank = this.getRankByRp(rp)

    if (!rank) return '0%'

    const percentage = Math.round(((rp - rank.baseRp) / 5000) * 100)

    return `${percentage}%`
  }

  removeWeekEntry = (index: number) => {
    const snapshot = this.state.weeks.slice();

    snapshot.splice(index, 1);

    return this.setState({ weeks: snapshot }, this.updateWeeks)
  }

  addWeekEntry = () => {
    const { weeks } = this.state;
    const previousWeek = weeks[weeks.length - 1];
    const week: Week = {
      bracket: brackets[0],
      startRp: previousWeek.endRp,
      endRp: (previousWeek.endRp * 0.8) + brackets[0].rp
    }
    const updatedWeeks: Week[] = [...weeks, week]

    return this.setState({ weeks: updatedWeeks })
  }

  updateWeekEntry = (bracket: Bracket, index: number) => {
    return new Promise((resolve, reject) => {
      const { weeks } = this.state;
      const previousWeek = weeks[index - 1];

      // handle updating week 1
      if (index === 0) {
        const weekSnapshot = weeks.slice();
        const updatedWeek = {
          bracket,
          startRp: this.props.startingRank.newRp,
          endRp: (this.props.startingRank.newRp * 0.8) + bracket.rp
        }

        weekSnapshot[0] = updatedWeek;
    
        return this.setState({ weeks: weekSnapshot }, () => resolve(true))
      }

      const updatedWeek: Week = {
        bracket,
        startRp: previousWeek.endRp,
        endRp: (previousWeek.endRp * 0.8) + bracket.rp
      }
      const weekSnapshot: Week[] = weeks.slice();

      weekSnapshot[index] = updatedWeek;

      return this.setState({ weeks: weekSnapshot }, () => resolve(true))
    })
  }

  updateWeeks = () => {
    const { weeks } = this.state;

    return weeks.forEach((week, i) => i > 0 && this.updateWeekEntry(week.bracket, i));
  }

  handleOptionChange = async (option: Bracket, index: number) => {
    if (!option) return null;

    await this.updateWeekEntry(option, index)

    return this.updateWeeks()
  }

  componentDidUpdate (prevProps: IWeekViewProps) {
    const { weeks } = this.state;

    if (prevProps.startingRank.newRp !== weeks[0].startRp) return this.updateWeeks();

    return null;
  }

  render() {
    const { classes } = this.props;
    const { weeks } = this.state;
    const selectOptions = brackets.map(bracket => ({
      value: bracket,
      label: bracket.name
    }))
    const resetStartDay = DateTime.local().set({ weekday: 3 });
    const resetEndDay = resetStartDay.plus({ weeks: 1 });

    return (
      <>
        <Text h3>Your weekly breakdown</Text>
        <table className={classes.table}>
          <thead>
            <tr>
              <th className={classes.tableHeader}>
                <Text caption>Week</Text>
              </th>
              <th className={classes.tableHeader}>
                <Text caption>Bracket (Max RP)</Text>
              </th>
              <th className={classes.tableHeader}>
                <Text caption>Starting At</Text>
              </th>
              <th className={classes.tableHeader}>
                <Text caption>Finshing At</Text>
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
              weeks.map((week: Week, i) => (
                <tr key={week.endRp}>
                  <td className={classes.tableData} align="center">
                    <Text className={classes.tableText}>
                      {resetStartDay.plus({ weeks: i }).toLocaleString({ month: 'short', day: 'numeric' })}
                      &nbsp;-&nbsp;
                      {resetEndDay.plus({ weeks: i }).toLocaleString({ month: 'short', day: 'numeric' })}
                    </Text>
                  </td>
                  <td className={classes.tableData} align="center">
                    <Select
                      options={selectOptions}
                      placeholder="Select Bracket"
                      defaultValue={selectOptions[0]}
                      value={{ value: week.bracket, label: week.bracket.name }}
                      isSearchable={false}
                      theme={selectStyles}
                      // @ts-ignore
                      onChange={option => this.handleOptionChange(option.value, i)}
                    />
                  </td>
                  <td className={classes.tableData} align="center">
                    <Text className={classes.tableText}>
                      Rank {this.getRankByRp(week?.startRp)?.number}, {this.getRankProgressByRp(week?.startRp)}
                    </Text>
                  </td>
                  <td className={classes.tableData} align="center">
                    <Text className={classes.tableText}>
                      Rank {this.getRankByRp(week?.endRp)?.number}, {this.getRankProgressByRp(week?.endRp)}
                    </Text>
                  </td>
                  <td align="center" colSpan={1}>
                    <Button
                      flat
                      disabled={i === 0}
                      onClick={() => this.removeWeekEntry(i)}
                      icon={<FiTrash />}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))
            }
            <tr>
              <td className={classes.tableData} colSpan={5} align="center">
                <Button
                  secondary
                  onClick={this.addWeekEntry}
                  icon={<FiCalendar />}
                >
                  Add Another Week
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}
