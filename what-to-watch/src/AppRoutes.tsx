import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Route, Router, Switch } from "react-router";
import { Header } from "./view/Header/Header";

//Route Components
import NetflixCateogires from "./view/NetflixCategories/NetflixCategories";
import ActorImage from "./view/ActorImage/ActorImage";

import { CommonStore } from "./stores/CommonStore";
import { RouterStore } from "mobx-react-router";
import styles from "./App.module.scss";

interface AppRouteProps extends CommonStore {
  routerStore?: RouterStore;
  history?: any;
}

class AppRoutes extends Component<AppRouteProps> {
  render() {
    return (
      <Router history={this.props.history}>
        <div className={styles.appContainer}></div>
        <Header />
        <Switch>
          <Route
            key="netflixCategories"
            exact
            path="/netflixCategories"
            component={NetflixCateogires}
          />
          <Route
            key="actorImage"
            exact
            path="/actorImage"
            component={ActorImage}
          />
        </Switch>
      </Router>
    );
  }
}

export default inject("routerStore")(observer(AppRoutes));
