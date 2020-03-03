import React, { FC } from "react";
import { Classes } from "jss";

import { Text } from "../../common";
import { Planner } from './components';

interface IHomeProps {
  classes: Classes
}

const Home: FC<IHomeProps> = ({ classes = {} }) => (
  <main className={classes.container}>
    <Text h1>Ranker</Text>
    <Text>The lightweight ranking calculator</Text>
    <Planner />
    <footer className={classes.footer}>
      <Text>
        Made with ❤ by Apparent. I'm on&nbsp;
        <a
          style={{ textDecoration: 'none' }}
          rel="noopener noreferrer"
          href="https://www.twitch.tv/apparentt"
          target="_blank"
        >
          <Text caption>Twitch</Text>
        </a>
        &nbsp;and&nbsp;
        <a
          style={{ textDecoration: 'none' }}
          rel="noopener noreferrer"
          href="https://www.youtube.com/c/apparentt"
          target="_blank"
        >
          <Text caption>YouTube</Text>
        </a>
      </Text>
    </footer>
  </main>
);

export default Home;
