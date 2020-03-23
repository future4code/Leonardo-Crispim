import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage/HomePage";




const routes = {
  root: "/",
  HomePage: "/HomePage",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} />
        <Route exact path={"/HomePage"} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
