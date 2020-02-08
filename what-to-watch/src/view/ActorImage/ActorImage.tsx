import React, { Component } from "react";
// import classNames from "classnames";
import styles from "./ActorImage.module.scss";

import { inject, observer } from "mobx-react";
import { RouterStore } from "mobx-react-router";
import { ActorStore } from "../../stores/ActorStore";

interface Props {
  actorStore?: ActorStore;
  routerStore?: RouterStore;
}

// class ActorImage extends Component<Props> {
class ActorImage extends Component<Props> {
  componentDidMount() {
    this.props.actorStore!.getActorData();
  }
  render() {
    const arrayOfIndexImageToShow = [4,5,6]
    let countOfImages = 0
    const { data } = this.props.actorStore!;
    const imgData = data && Array.isArray(data.img)
      ? data.img.map((img: any, index: number) => {
        countOfImages += 1
        console.log(img)
        if(arrayOfIndexImageToShow.indexOf(index) > -1)
          return (
            <div key={`${countOfImages}_image`}>
              <img src={img}></img>
            </div>
          );
        })
      : null;
    const divData = data && Array.isArray(data.div)
      ? data.div.map((img: any) => {
          return <div>Div</div>;
        })
      : null;

    return (
      <div className={styles.Header}>
        <div>{imgData}</div>
        <div>{divData}</div>
      </div>
    );
  }
}

export default inject("actorStore", "routerStore")(observer(ActorImage));
