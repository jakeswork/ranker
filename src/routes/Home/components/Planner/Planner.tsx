import React, { FC, useState } from 'react'
import { Classes } from 'jss'

import { Text } from '../../../../common';
import ranks, { Rank } from '../../../../data/ranks';
import { RankCard, WeekView } from './components';

interface IPlannerProps {
  classes: Classes
}

const Planner: FC<IPlannerProps> = ({ classes = {} }) => {
  const [selectedRank, setSelectedRank] = useState(ranks[1])

  return (
    <>
      <Text h3>Select your current rank</Text>
      <div className={classes.cardsWrapper}>
        {
          ranks.map((rank: Rank) => rank.number !== 14 && (
            <RankCard
              key={rank.number}
              isActive={rank.number === selectedRank.number}
              onSelect={(rank: Rank) => setSelectedRank(rank)}
              rank={rank}
            />)
          )
        }
      </div>
      <WeekView startingRank={selectedRank} />
    </>
  )
}

export default Planner
