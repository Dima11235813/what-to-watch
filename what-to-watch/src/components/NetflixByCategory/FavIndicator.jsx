import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FavIndicator = ({isFav}) => <FontAwesomeIcon icon={faStar} inverse={isFav} />;

export default FavIndicator;
