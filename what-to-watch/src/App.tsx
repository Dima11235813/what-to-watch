import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "mobx-react-router";
import { Provider } from "mobx-react";
import Responsive from "react-responsive";
import { store } from "./stores";
import { Route, Router, Switch } from "react-router";
import { WithWidth } from "@material-ui/core";
import withMobileDialog, {
  InjectedProps
} from "@material-ui/core/withMobileDialog";
import Main from "./view/Main";

export const Desktop = (props: any) => (
  <Responsive {...props} minWidth={1024} />
);
export const Mobile = (props: any) => <Responsive {...props} maxWidth={1023} />;

const broswerHistory = createBrowserHistory();
const history = syncHistoryWithStore(broswerHistory, store.routerStore);

class App extends Component<InjectedProps & Partial<WithWidth>> {
  render() {
    return (
      <Provider {...store}>
        <>
          <Router history={history}>
            <Switch>
              <Route key="home" path="" component={Main} />
            </Switch>
          </Router>
        </>
      </Provider>
    );
  }
}

export default withMobileDialog()(App);
