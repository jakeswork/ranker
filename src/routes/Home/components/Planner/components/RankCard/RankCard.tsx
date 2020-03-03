import React, { useState } from 'react';
import cx from 'classnames';
import { Classes } from 'jss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Card, Text } from '../../../../../../common';
import { Rank } from '../../../../../../data/ranks';
import theme from '../../../../../../utils/theme';

export interface IRankCardProps {
  rank: Rank;
  classes: Classes;
  onSelect?: Function;
  isActive?: Boolean;
}

export default ({
  rank,
  classes,
  onSelect,
  isActive,
}: IRankCardProps) => {
  const [sliderValue, setSliderValue] = useState(1)

  return (
    <Card
      onClick={() => (!isActive && onSelect) && onSelect(rank)}
      className={cx([classes.card, { [classes.active]: isActive }])}
    >
      <img src={rank.image} className={classes.rankImage} alt={rank.title} />
      <Text className={classes.cardText}>Rank {rank.number}</Text>
      <Slider
        className={classes.slider}
        onChange={(value) => {
          if (onSelect) onSelect({ number: rank.number, baseRp: rank.baseRp, newRp: rank.baseRp + (5000 * (value / 100))})
          return setSliderValue(value)
        }}
        defaultValue={1}
        handleStyle={[{
          background: theme.colorActive,
          borderColor: theme.colorActive
        }]}
        trackStyle={[{
          background: theme.colorActive
        }]}
        min={1}
        max={99}
      />
      <Text caption className={classes.percentage}>
        {sliderValue}%
      </Text>
    </Card>
  );
};
