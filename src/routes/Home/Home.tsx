import React, { FC } from "react";
import { Classes } from "jss";

import { Text } from "../../common";
import Selection from './components/Selection';

interface IHomeProps {
  classes: Classes
}

const Home: FC<IHomeProps> = ({ classes = {} }) => (
  <main className={classes.container}>
    <Text h1>Ranker</Text>
    <Text>The lightweight ranking calculator</Text>
    <Selection />
  </main>
);

export default Home;
