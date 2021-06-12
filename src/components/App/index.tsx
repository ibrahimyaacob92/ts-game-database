import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "components/Home";
import GlobalStyles from "components/GlobalStyles";

const App = (): ReactElement => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
