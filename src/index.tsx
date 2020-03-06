import React, { FC, ReactElement } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "react-jss";
import "reset-css";
import "circular-std";

import { RouteConfiguration } from "./index.d";
import "./index.css";
import routes from "./routes";
import theme from "./utils/theme";
import GA from './third-party/GoogleAnalytics';

GA.init();

const App: FC = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        {routes.map(({ path, Component }: RouteConfiguration) => (
          <Route
            key={path}
            path={path}
            exact
            render={() => <Component />}
          />
        ))}
      </Switch>
    </Router>
  </ThemeProvider>
);

render(<App />, document.getElementById("root"));
