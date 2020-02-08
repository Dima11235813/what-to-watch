import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { logToConsole, logObjToConsole } from "../../../utils/logger";
import { ActorQueryStore } from "../../../stores/ActorQuery";
import { CommunicationStayCurrentLandscape } from "material-ui/svg-icons";

let countOfSearchResultImages = 0;

interface LinkImageCollectionProps {
  actorQueryStore?: ActorQueryStore;
}

const imdbDomain = "https://www.imdb.com";

class LinkImageCollection extends Component<LinkImageCollectionProps> {
  render() {
    logToConsole("LinkImageCollectionProps Render, props:");
    logObjToConsole(this.props);
    const { searchResults } = this.props.actorQueryStore!;

    if (!searchResults) {
      return <div>Spinner</div>;
    }
    return searchResults.map((img: any, index: number) => {
      countOfSearchResultImages += 1;
      console.log(img);
      return (
        <div key={`${countOfSearchResultImages}_image`}>
          <a href={`${imdbDomain}${img.url}`}>
            <img src={img.src}></img>
          </a>
        </div>
      );
    });
  }
}

export default inject("actorQueryStore")(observer(LinkImageCollection));
