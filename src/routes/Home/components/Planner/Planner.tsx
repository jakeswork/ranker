import React, { FC, useState } from 'react'
import { Classes } from 'jss'

import { Text, Input } from '../../../../common';
import ranks, { Rank } from '../../../../data/ranks';
import { RankCard, BracketCard, WeekView } from './components';
import brackets, { Bracket } from '../../../../data/brackets';

interface IPlannerProps {
  classes: Classes
}

const Planner: FC<IPlannerProps> = ({ classes = {} }) => {
  const [selectedRank, setSelectedRank] = useState(ranks[1])
  const [selectedBracket, setSelectedBracket] = useState(brackets[0])

  const nextWeekRp = (selectedRank.newRp * 0.8) + selectedBracket.rp

  const manualBracketDefault: Bracket = {
    name: 'Custom',
    rp: 0
  };

  return (
    <>
      <Text h3>Select your current rank</Text>
      <div className={classes.cardsWrapper}>
        {
          ranks.map((rank: Rank) => rank.number !== 14 && (
            <RankCard
              isActive={rank.number === selectedRank.number}
              onSelect={(rank: Rank) => setSelectedRank(rank)}
              rank={rank}
            />)
          )
        }
      </div>
      <Text h3>Select your bracket for this week</Text>
      <div className={classes.cardsWrapper}>
        {
          brackets.map((bracket: Bracket) =>
            <BracketCard
              bracket={bracket}
              onSelect={() => setSelectedBracket(bracket)}
              isActive={selectedBracket.rp === bracket.rp}
            />
          )
        }
        <BracketCard
          bracket={{ ...manualBracketDefault, rp: selectedBracket.rp }}
          onSelect={() => setSelectedBracket(manualBracketDefault)}
          isActive={selectedBracket.name === manualBracketDefault.name}
        />
      </div>
      <div className={classes.inputWrapper}>
        {
          (selectedBracket.name === manualBracketDefault.name) && (
            <Input
              onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                (Number(target.value) > -1 && Number(target.value) <= 13000) &&
                  setSelectedBracket({
                    name: manualBracketDefault.name,
                    rp: Number(target.value)
                  })
              }
              type="number"
              placeholder="Enter Custom RP"
            />
          )
        }
      </div>
      <WeekView
        firstWeek={{
          bracket: selectedBracket,
          startRp: selectedRank.newRp,
          endRp: nextWeekRp
        }}
      />
    </>
  )
}

export default Planner
