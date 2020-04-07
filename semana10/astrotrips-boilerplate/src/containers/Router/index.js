import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage/HomePage";
import ListTripsPage from "../ListTripsPage/ListTripsPage";
import ApplyPage from "../ApplyPage/ApplyPage";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";
import CreateTripPage from "../CreateTripPage/CreateTripPage";




export const routes = {
  LoginPage: "/login",
  HomePage: "/",
  ListTripsPage: "/trips",
  ApplyPage: "/application",
  TripDetailsPage: "/trips/details",
  CreateTripPage: "/trips/create",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.LoginPage} component={LoginPage} />
        <Route exact path={routes.HomePage} component={HomePage} />
        <Route exact path={routes.ListTripsPage} component={ListTripsPage} />
        <Route exact path ={routes.ApplyPage} component={ApplyPage}/>
        <Route exact path ={routes.TripDetailsPage} component={TripDetailsPage}/>
        <Route exact path ={routes.CreateTripPage} component={CreateTripPage}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
