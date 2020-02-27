import React, { FC } from "react";
import { Classes } from "jss";

import { Text } from "../../common";
import RankSelection from './components/RankSelection';

interface IHomeProps {
  classes: Classes
}

const Home: FC<IHomeProps> = ({ classes = {} }) => (
  <main className={classes.container}>
    <Text h1>Ranker</Text>
    <Text>The lightweight ranking calculator</Text>
    <RankSelection />
  </main>
);

export default Home;
