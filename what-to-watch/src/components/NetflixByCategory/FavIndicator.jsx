import React from "react";

import "./catItemStyles.css";

const FavIndicator = props => {
  const favIndicatorStyle = {
    cursor: "pointer",
    padding: "1rem"
  };
  const { isFav } = props;
  return (
    <i
      style={favIndicatorStyle}
      className={`${isFav ? "fas" : "far"} fa-star fa-pull-left`}
    />
  );
};

export default FavIndicator;
