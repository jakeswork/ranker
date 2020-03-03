import React from 'react';
import cx from 'classnames';
import { Classes } from 'jss';
import 'rc-slider/assets/index.css';

import { Card, Text } from '../../../../../../common';
import { Bracket } from '../../../../../../data/brackets';

export interface IBracketCardProps {
  bracket: Bracket;
  classes: Classes;
  onSelect: Function;
  isActive: Boolean;
}

export default ({ bracket, classes, onSelect, isActive }: IBracketCardProps) => (
  <Card
    onClick={() => onSelect()}
    className={cx([classes.card, { [classes.active]: isActive }])}
  >
    <Text className={classes.cardText}>{bracket.name}</Text>
    <Text caption>Assuming {bracket.rp} RP</Text>
  </Card>
);
