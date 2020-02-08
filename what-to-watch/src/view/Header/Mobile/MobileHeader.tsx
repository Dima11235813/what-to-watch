import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styles from "./MobileHeader.module.scss";

class MobileHeader extends Component {
  render() {
    return (
      <div className={styles.Header}>
      </div>
    );
  }
}
export default inject("routerStore")(observer(MobileHeader));
