import React from "react";

import "./catItemStyles.css";
import FavIndicator from "./FavIndicator";
import { logToConsole } from "../../utils/logger";
class NetflixCatItem extends React.Component {
  constructor(props) {
    super(props);
  }
  url = "https://www.netflix.com/browse/genre/";
  netflixCatItemStyle = {
    backgroundColor: "grey",
    display: "inline-block"
  };
  favIndicatorStyle = {
    cursor: "pointer",
    padding: "1rem"
  };
  saveAsFav = id => {
    this.props.saveFavStatus(id, !this.props.isFav)
    this.props.resortCatItems();
  };
  render() {
    logToConsole(`NetflixCatItem render with props, :`)
    const { name, id} = this.props.catItem;
    const {isFav} = this.props
    return (
      <div style={this.netflixCatItemStyle} className="cat_link_container">
        <div
          onClick={() => {
            this.saveAsFav(id);
          }}
          className="fav_indicator_wrapper"
        >
          <FavIndicator isFav={isFav} />
        </div>
        <a href={`${this.url}${id}`}>{name}</a>
      </div>
    );
  }
}

export default NetflixCatItem;
