import React, { Component, ChangeEvent } from "react";
// import classNames from "classnames";
import styles from "./ActorImage.module.scss";

import { inject, observer } from "mobx-react";
import { RouterStore } from "mobx-react-router";
import { ActorStore } from "../../stores/ActorStore";
import TextInput from "../../components/shared/TextInput/TextInput";
import { PrimaryButton } from "../../components/shared/PrimaryButton/PrimaryButton";
import { logToConsole } from "../../utils/logger";
import { ActorQueryStore } from "../../stores/ActorQuery";
import ImageCollection from "./ImageCollections/ImageCollection";
import LinkImageCollection from "./ImageCollections/LinkImageCollection";

interface Props {
  actorQueryStore?: ActorQueryStore;
  routerStore?: RouterStore;
}

interface State {
  searchText: string;
}

// class ActorImage extends Component<Props> {
class ActorImage extends Component<Props> {
  state = {
    searchText: ""
  };
  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name: any = e.target.name;
    const value: any = e.target.value;
    if (Object.keys(this.state).includes(name)) {
      this.setState({ [name]: value } as Pick<State, keyof State>);
      if (e.target.value.length > 4) {
        this.props.actorQueryStore!.getActorsBySearch(value);
      }
    }
  };

  render() {
    const { searchText } = this.state;
    return (
      <div className={styles.ActorImageContainer}>
        <ImageCollection />
          <TextInput
            type="text"
            name="searchText"
            disabled={false}
            value={searchText}
            onChange={this.onChange}
            minLength={2}
          />
        <div className={styles.searchResultImgContainer}>
          <LinkImageCollection />
        </div>
        <PrimaryButton>Search</PrimaryButton>
      </div>
    );
  }
}

export default inject("actorQueryStore", "routerStore")(observer(ActorImage));
