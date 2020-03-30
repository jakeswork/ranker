import React, { FC } from "react";
import { Classes } from "jss";
import { OutboundLink } from 'react-ga';

import { Text } from "../../common";
import { Planner } from './components';

interface IHomeProps {
  classes: Classes
}

const Home: FC<IHomeProps> = ({ classes = {} }) => (
  <>
    <main className={classes.container}>
      <Text h1>Ranker</Text>
      <Text>The lightweight ranking calculator.</Text>
      <Planner />
    </main>
    <footer className={classes.footer}>
      <Text style={{ marginBottom: 16 }}>Made with ❤ by Apparent - Earthshaker (EU)</Text>
      <Text style={{ marginBottom: 16, fontWeight: 700 }}>
        In-game donations are appreciated <span role="img" aria-label="smiley-face">😊</span>
      </Text>
      <div>
        <OutboundLink
          style={{ textDecoration: 'none' }}
          rel="noopener noreferrer"
          to="https://www.twitch.tv/apparentt"
          target="_blank"
          eventLabel="Twitch Link"
        >
          <Text caption>Twitch</Text>
        </OutboundLink>
        &nbsp;<span style={{ color: 'white '}}>|</span>&nbsp;
        <OutboundLink
          style={{ textDecoration: 'none' }}
          rel="noopener noreferrer"
          to="https://www.youtube.com/c/apparentt"
          target="_blank"
          eventLabel="YouTube Link"
        >
          <Text caption>YouTube</Text>
        </OutboundLink>
      </div>
    </footer>
  </>
);

export default Home;
