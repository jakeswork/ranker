import React, { Component } from 'react';
import { FiCalendar, FiRefreshCcw } from 'react-icons/fi';
import { Classes } from 'jss';
import Select from 'react-select';

import { Text, Button } from '../../../../../../common'
import brackets, { Bracket } from '../../../../../../data/brackets';
import ranks from '../../../../../../data/ranks';
import { selectStyles } from './styles';

interface Week {
  bracket: Bracket
  startRp: number;
  endRp: number;
}

interface IWeekViewProps {
  classes: Classes
  firstWeek: Week;
}

interface IWeekViewState {
  weeks: Array<Week>;
  createWeekOpen: Boolean;
  selectedBracket: Bracket;
}

export default class WeekView extends Component<IWeekViewProps, IWeekViewState> {
  static getDerivedStateFromProps (props: IWeekViewProps, state: IWeekViewState) {
    if (
      props.firstWeek?.bracket.rp !== state.weeks[0].bracket.rp ||
      props.firstWeek?.startRp !== state.weeks[0].startRp ||
      props.firstWeek?.endRp !== state.weeks[0].endRp
    ) {
      const weeksSnapshot = state.weeks

      weeksSnapshot[0] = props.firstWeek

      return {
        ...state,
        weeks: weeksSnapshot
      }
    }

    return null
  }

  constructor(props: IWeekViewProps) {
    super(props)

    this.state = {
      weeks: [props.firstWeek],
      createWeekOpen: false,
      selectedBracket: props.firstWeek.bracket,
    }
  }

  getRankByRp = (rp: number) => ranks.find(rank => rank.baseRp < rp)
  
  getRankProgressByRp = (rp: number) => {
    const rank = this.getRankByRp(rp)

    if (!rank) return '0%'

    const percentage = Math.round(((rp - rank.baseRp) / 5000) * 100)

    return `${percentage}%`
  }

  addWeekEntry = () => {
    const { selectedBracket, weeks } = this.state;
    const previousWeek = this.state.weeks[this.state.weeks.length - 1];
    const week: Week = {
      bracket: selectedBracket,
      startRp: previousWeek.endRp,
      endRp: (previousWeek.endRp * 0.8) + selectedBracket.rp
    }
    const updatedWeeks = [...weeks, week]

    return this.setState({ weeks: updatedWeeks, createWeekOpen: false })
  }

  render() {
    const { classes } = this.props;
    const { weeks, createWeekOpen } = this.state;
    const selectOptions = brackets.map(bracket => ({
      value: bracket,
      label: bracket.name
    }))

    return (
      <>
        <Text h3>Your Weekly Breakdown</Text>
        <table className={classes.table}>
          <thead>
            <th className={classes.tableHeader}>
              <Text caption>Week</Text>
            </th>
            <th className={classes.tableHeader}>
              <Text caption>Bracket</Text>
            </th>
            <th className={classes.tableHeader}>
              <Text caption>Starting At</Text>
            </th>
            <th className={classes.tableHeader}>
              <Text caption>Finshing At</Text>
            </th>
          </thead>
          <tbody>
            {
              weeks.map((week: Week, i) => (
                <tr>
                  <td className={classes.tableData} align="center">
                    <Text className={classes.tableText}>{i + 1}</Text>
                  </td>
                  <td className={classes.tableData} align="center">
                    <Text className={classes.tableText}>{week?.bracket.name}</Text>
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
                </tr>
              ))
            }
            {
              createWeekOpen && (
                <tr>
                  <td className={classes.tableData} align="center">
                    <Text className={classes.tableText}>
                      {weeks.length + 1}
                    </Text>
                  </td>
                  <td className={classes.tableData} align="center">
                    <Select
                      options={selectOptions}
                      placeholder="Select Bracket"
                      theme={selectStyles}
                      //@ts-ignore
                      onChange={option => option && this.setState({ selectedBracket: option.value })}
                    />
                  </td>
                  <td className={classes.tableData} align="center">
                    Rank {this.getRankByRp(weeks[weeks.length - 1].endRp)?.number}, {this.getRankProgressByRp(weeks[weeks.length - 1].endRp)}
                  </td>
                  <td className={classes.tableData} align="right" colSpan={1}>
                    <Button success onClick={this.addWeekEntry}>Confirm</Button>
                    <Button danger onClick={() => this.setState({ createWeekOpen: false })}>Cancel</Button>
                  </td>
                </tr>
              )
            }
            <tr>
              <td className={classes.tableData} colSpan={4} align="center">
                <Button
                  secondary
                  onClick={() => this.setState({ createWeekOpen: true })}
                  icon={<FiCalendar />}
                >
                  Add Another Week
                </Button>
              </td>
            </tr>
          </tbody>
          {
            weeks.length > 1 && (
              <td className={classes.resetButton}>
                <Button
                  flat
                  onClick={() => this.setState({ weeks: [this.props.firstWeek] })}
                  icon={<FiRefreshCcw />}
                >
                  Reset
                </Button>
              </td>
            )
          }
        </table>
      </>
    )
  }
}
