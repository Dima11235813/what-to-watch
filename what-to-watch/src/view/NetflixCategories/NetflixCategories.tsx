import React, { Component, ChangeEvent } from "react";
import { inject, observer } from "mobx-react";
import { RouterStore } from "mobx-react-router";
import { RouteComponentProps } from "react-router";
import {
  SearchByWatchEntityParams,
  SearchByNameParams
} from "../models/paramTypes";
import styles from './NetflixCategories.module.scss'
import { UiPreferenceStore } from "../../stores/UiPreferenceStore";
import { logToConsole } from "../../utils/logger";
import TextInput from "../../components/shared/TextInput/TextInput";
import NetflixByCategory from "../../components/NetflixByCategory/NetflixByCategory";

type Params = SearchByNameParams | SearchByWatchEntityParams;

interface State {
  loading: boolean;
  error: boolean;
  searchText: string;
}

interface Props {
  memberStore?: UiPreferenceStore;
  routerStore?: RouterStore;
}

class NetflixCategories extends Component<Props & RouteComponentProps<Params>, State> {
  constructor(props: Readonly<Props & RouteComponentProps<Params>>) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      searchText: ""
    };
  }
  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    logToConsole(`NetflixCateogires On Change Event Fired with Value: ${e.target.value}`);
    const name: any = e.target.name;
    if (Object.keys(this.state).includes(name)) {
      this.setState({ [name]: e.target.value } as Pick<State, keyof State>);
    }
  };
  componentDidUpdate(
    prevProps: Readonly<Props & RouteComponentProps<Params>>
  ): void {}

  render() {
    logToConsole(`NetflixCateogires component render`);
    const { searchText } = this.state;
    return (
      <div className={styles.categoryPageContainer}>
        <TextInput
          type="text"
          name="searchText"
          disabled={false}
          value={searchText}
          onChange={this.onChange}
          minLength={2}
        />
        <NetflixByCategory filter={this.state.searchText} />
      </div>
    );
  }
}

export default inject("uiPreferenceStore", "routerStore")(observer(NetflixCategories));
