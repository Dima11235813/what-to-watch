import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Route, Router, Switch } from "react-router";
import { Header } from "./view/Header/Header";

//Route Components
import Main from "./view/Main";
import ActorImage from "./view/ActorImage/ActorImage";

import { CommonStore } from "./stores/CommonStore";
import { RouterStore } from "mobx-react-router";

interface AppRouteProps extends CommonStore {
  routerStore?: RouterStore;
  history?: any;
}

class AppRoutes extends Component<AppRouteProps> {
  render() {
    return (
      <Router history={this.props.history}>
        <Header />
        <Switch>
          <Route key="home" exact path="/" component={Main} />
          <Route key="actorImage" exact path="/actorImage" component={ActorImage} />
        </Switch>
      </Router>
    );
  }
}

export default inject("routerStore")(observer(AppRoutes));
