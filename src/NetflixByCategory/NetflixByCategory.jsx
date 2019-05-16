import React from "react";
import { netflixCatData } from "../shared/netflixCategoryData";
import NetflixCatItem from "./NetflixCatItem";

class NetflixByCategory extends React.Component {
  state = {
    netflixCatData
  };

  netflixByCategoryStyle = {
    // height: "100vh",
    // width: "100vw"
    fontSize: "2rem",
    display: 'grid',
    gridTemplateColumns: "25% 25% 25% 25%",
    gridGap: "1rem",
    marginTop: "5rem"
  };
  render() {
    const filter = this.props.filter.toLowerCase();
    return (
      <div style={this.netflixByCategoryStyle}>
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
