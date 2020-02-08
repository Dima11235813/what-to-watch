import React, { Component, ChangeEvent } from "react";
import { inject, observer } from "mobx-react";
import { logToConsole, logObjToConsole } from "../../../utils/logger";
import { ActorStore } from "../../../stores/ActorStore";
import styles from './ImageCollection.module.scss'

const checkIfArray = (array: any) => Array.isArray(array);
let countOfImages = 0;
const arrayOfIndexImageToShow = [4, 5];

interface ImageCollectionProps {
  actorStore?: ActorStore;
}

// const ImageCollection = (images: any) => {
class ImageCollection extends Component<ImageCollectionProps> {
  componentDidMount() {
    this.props.actorStore!.getActorPageData();
  }
  render() {
    logToConsole("LinkImageCollectionProps Render, props with page data:");
    console.log(this.props.actorStore!.pageData);
    const { pageData } = this.props.actorStore!;
    if (!pageData) {
      return <div>Spinner</div>;
    }
    return (
     <div className={styles.imageCollectionContainer}>
      {
       pageData.map((img: any, index: number) => {
         countOfImages += 1;
         if (arrayOfIndexImageToShow.indexOf(index) > -1)
           return (
             <div className={styles.imageItem} key={`${countOfImages}_image`}>
               <img src={img.src}></img>
             </div>
           );
       })
      }
    </div>
    )
  }
}

export default inject("actorStore")(observer(ImageCollection));
