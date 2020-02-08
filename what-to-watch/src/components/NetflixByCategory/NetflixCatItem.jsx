import React from "react";

import "./catItemStyles.css";
import FavIndicator from "./FavIndicator";
class NetflixCatItem extends React.Component {
  constructor(props) {
    super(props);
    const favStatus = localStorage.getItem(this.props.catItem.id);
    this.state = {
      isFav: favStatus ? favStatus : false
    };
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
    localStorage.setItem(id, !this.state.isFav);
    this.setState({
      isFav: !this.state.isFav
    });
  };
  render() {
    const { name, id } = this.props.catItem;
    const { isFav } = this.state;
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
        <a href={`${this.url}${id}`}>
          {name}
        </a>
      </div>
    );
  }
}

export default NetflixCatItem;
