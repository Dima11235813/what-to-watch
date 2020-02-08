import React from "react";
import NetflixCatItem from "./NetflixCatItem";
import {netflixCatData} from '../../shared/netflixCategoryData'
import './catItemListStyles.css'
import { logToConsole } from "../../utils/logger";

class NetflixByCategory extends React.Component {
  state = {
    netflixCatData
  };

  netflixByCategoryStyle = {
    // height: "100vh",
    // width: "100vw"
    display: 'grid',
    marginTop: "5rem"
  };
  render() {
    logToConsole(`NetflixByCategory render, 
    state: ${JSON.stringify(this.state)}`)
    const filter = this.props.filter.toLowerCase();
    return (
      <div className="cat_items_list" style={this.netflixByCategoryStyle}>
        {this.state.netflixCatData.map(catItem => {
            const lowerCaseName = catItem.name.toLowerCase()
            const catItemMatchedFilter = lowerCaseName.indexOf(filter) > -1 
          return catItemMatchedFilter?  <NetflixCatItem key={catItem.id} catItem={catItem} /> : null
          
        })}
      </div>
    );
  }
}
export default NetflixByCategory;
