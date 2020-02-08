import React from "react";

import style from "./catItemStyles.module.scss";
import FavIndicator from "./FavIndicator";
import { logToConsole } from "../../utils/logger";
class NetflixCatItem extends React.Component {
  constructor(props) {
    super(props);
  }
  url = "https://www.netflix.com/browse/genre/";

  saveAsFav = id => {
    this.props.saveFavStatus(id, !this.props.isFav);
    this.props.resortCatItems();
  };
  render() {
    logToConsole(`NetflixCatItem render with props, :`);
    const { name, id } = this.props.catItem;
    const { isFav } = this.props;
    return (
      <div className={style.catLinkContainer}>
        <div
          className={style.favIndicator}
          onClick={() => {
            this.saveAsFav(id);
          }}
        >
          <FavIndicator isFav={isFav} />
        </div>
        <div className={style.catLink}>
          <a className={style.catText} href={`${this.url}${id}`}>
            {name}
          </a>
        </div>
      </div>
    );
  }
}

export default NetflixCatItem;
