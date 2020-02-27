import React, { useState, Fragment } from 'react';
import { Classes } from 'jss';

import { Text } from '../../../../common';
import ranks, { Rank } from '../../../../data/ranks';
import brackets from '../../../../data/brackets';
import RankCard from './components/RankCard';
import BracketCard from './components/BracketCard';

export interface IRankSelectionProps {
  classes: Classes
}

export default ({ classes }: IRankSelectionProps) => {
  const [rankSelected, setRankSelected] = useState({ number: 0, baseRp: 0 })
  const [bracketSelected, setBracketSelected] = useState(0)
  const nextWeekRp = (rankSelected.baseRp * 0.8) + bracketSelected
  const nextWeekRank = ranks.find(rank => rank.baseRp < nextWeekRp)
  const nextWeekRankPercentage = nextWeekRank &&
    ((nextWeekRp - nextWeekRank.baseRp) / 5000) * 100
  const nextWeek = {
    diff: nextWeekRank && nextWeekRp - nextWeekRank.baseRp,
    percentage: nextWeekRankPercentage
  }

  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.half}>
          <Text h3>Select your current rank</Text>
          <div className={classes.overflow}>
            {
              ranks.map(rank => rank.number !== 14 &&
                <RankCard
                  key={rank.number}
                  rank={rank}
                  onSelect={(rank: Rank) => setRankSelected(rank)}
                  isActive={rankSelected.number === rank.number}
                />
              )
            }
          </div>
        </div>
        <div className={classes.half}>
          <Text h3>Select your bracket for this week</Text>
          <div className={classes.overflow}>
            {
              brackets.map(bracket => (
                <BracketCard
                  key={bracket.rp}
                  bracket={bracket}
                  onSelect={() => setBracketSelected(bracket.rp)}
                  isActive={bracketSelected === bracket.rp}
                />
              ))
            }
          </div>
        </div>
      </div>
      {
        bracketSelected && rankSelected && (
          <div className={classes.half}>
            <Text h3 style={{ marginBottom: 16 }}>Your rank next week will be</Text>
            <RankCard
              rank={nextWeekRank || ranks[0]}
              percentage={nextWeek}
            />
          </div>
        )
      }
    </Fragment>
  );
};
