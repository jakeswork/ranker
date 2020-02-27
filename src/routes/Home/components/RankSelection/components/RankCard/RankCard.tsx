import React from 'react';
import cx from 'classnames';
import { Classes } from 'jss';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Card, Text } from '../../../../../../common';
import { Rank } from '../../../../../../data/ranks';
import theme from '../../../../../../utils/theme';

export interface IRankCardProps {
  rank: Rank;
  classes: Classes;
  percentage?: number;
  onSelect?: Function;
  isActive?: Boolean;
}

const SliderWithTooltip = createSliderWithTooltip(Slider);

export default ({ rank, classes, onSelect, isActive, percentage }: IRankCardProps) => (
  <Card
    onClick={() => (!isActive && onSelect) && onSelect(rank)}
    className={cx([classes.card, { [classes.active]: isActive }])}
  >
    <img src={rank.image} className={classes.rankImage} alt={rank.title} />
    <Text className={classes.cardText}>Rank {rank.number}</Text>
    {
      isActive &&
        <SliderWithTooltip
          className={classes.slider}
          onAfterChange={value => onSelect && onSelect({ number: rank.number, baseRp: rank.baseRp + (5000 * (value / 100))})}
          defaultValue={1}
          handleStyle={[{
            background: theme.colorActive,
            borderColor: theme.colorActive
          }]}
          trackStyle={[{
            background: theme.colorActive
          }]}
          tipFormatter={(value: number) => `${value}%`}
          min={1}
          max={99}
        />
    }
    {
      percentage && (
        <Slider
          disabled
          className={classes.slider}
          min={1}
          max={5000}
          handleStyle={[{
            background: 'transparent',
            borderColor: 'transparent'
          }]}
          trackStyle={[{
            background: theme.colorActive
          }]}
          defaultValue={percentage}
        />
      )
    }
  </Card>
);
