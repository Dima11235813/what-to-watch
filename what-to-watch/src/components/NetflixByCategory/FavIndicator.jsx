import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "./catItemStyles.css";

const FavIndicator = props => {
  const favIndicatorStyle = {
    cursor: "pointer",
    padding: "1rem"
  };
  const { isFav } = props;
  return (
    <FontAwesomeIcon icon={faStar} inverse={isFav} style={favIndicatorStyle}/>
  );
};

export default FavIndicator;
