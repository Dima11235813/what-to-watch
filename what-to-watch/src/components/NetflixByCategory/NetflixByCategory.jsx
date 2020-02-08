import React from "react";
import NetflixCatItem from "./NetflixCatItem";
import "./catItemListStyles.css";
import { logToConsole } from "../../utils/logger";
import { FavLookupFromLocalStorage } from "../../utils/netflixCategoryUtils";

class NetflixByCategory extends React.Component {
  constructor() {
    super();
    this.favLookupFromLocalStorage = new FavLookupFromLocalStorage();
    this.state = {
      netflixCatData: this.favLookupFromLocalStorage.getSortedItems()
    };
  }
  resortCatItems = () => {
    let newState = this.favLookupFromLocalStorage.getSortedItems();
    logToConsole(newState)
    this.setState({ netflixCatData: newState });
  };
  saveFavStatus = (id, status) => {
    logToConsole(`Setting id: ${id} to status ${status}`)
    this.favLookupFromLocalStorage.setFavStatus(id, status)
    this.resortCatItems()
  }
  netflixByCategoryStyle = {
    // height: "100vh",
    // width: "100vw"
    display: "grid",
    marginTop: "5rem"
  };
  render() {
    logToConsole(`NetflixByCategory render`);
    const filter = this.props.filter.toLowerCase();
    return (
      <div className="cat_items_list" style={this.netflixByCategoryStyle}>
        {this.state.netflixCatData.map(catItem => {
          const lowerCaseName = catItem.name.toLowerCase();
          const catItemMatchedFilter = lowerCaseName.indexOf(filter) > -1;
          return catItemMatchedFilter ? (
            <NetflixCatItem
              resortCatItems={this.resortCatItems}
              key={catItem.id}
              catItem={catItem}
              saveFavStatus={this.saveFavStatus}
              isFav={this.favLookupFromLocalStorage.getFavStatus(catItem.id)}
            />
          ) : null;
        })}
      </div>
    );
  }
}
export default NetflixByCategory;
