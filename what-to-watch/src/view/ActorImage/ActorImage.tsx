import React, { Component } from "react";
// import classNames from "classnames";
import styles from "./ActorImage.module.scss";

import { inject, observer } from "mobx-react";

// interface Props {
//   authStore?: AuthStore;
// }

// class ActorImage extends Component<Props> {
class ActorImage extends Component {
  render() {
    return (
      <div className={styles.Header}>
        <div>
        </div>
      </div>
    );
  }
}

export default inject("routerStore")(observer(ActorImage));
