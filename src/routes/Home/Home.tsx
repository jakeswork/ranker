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
    <footer className={classes.footer}>
      <Text>
        Made with ❤ by&nbsp;
        <a
          style={{ textDecoration: 'none' }}
          rel="noopener noreferrer"
          href="https://www.twitch.tv/apparentt"
          target="_blank"
        >
          <Text caption>Apparent</Text>
        </a>
      </Text>
    </footer>
  </main>
);

export default Home;
