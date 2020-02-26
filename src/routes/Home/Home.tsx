import React, { FC } from "react";
import { Classes } from "jss";

import globalStyles from '../../utils/globalStyles';
import Text from "../../components/Text";

interface IHomeProps {
  classes: Classes
}

const Home: FC<IHomeProps> = ({ classes = {} }) => {
  const globals = globalStyles()

  return (
    <div className={classes.container}>
      <main className={globals.fullScreen}>
        <Text h1>Hello, World</Text>
      </main>
    </div>
  );
};

export default Home;
