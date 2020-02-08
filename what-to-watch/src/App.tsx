import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "mobx-react-router";
import { Provider } from "mobx-react";
import Responsive from "react-responsive";
import { store } from "./stores";
import { WithWidth } from "@material-ui/core";
import withMobileDialog, {
  InjectedProps
} from "@material-ui/core/withMobileDialog";
import AppRoutes from "./AppRoutes";

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
        <div>
          <AppRoutes history={history} />
        </div>
      </Provider>
    );
  }
}

export default withMobileDialog()(App);
