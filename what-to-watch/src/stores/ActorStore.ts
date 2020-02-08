import { action, decorate, observable } from 'mobx';
import React from 'react';
import { CommonStore } from './CommonStore';
import { logToConsole, logObjToConsole } from '../utils/logger';
import ActorApi from '../api/ActorData.api';

export interface ImageListDTO {
  div?: Array<any>
  img?: Array<any>
  searchResultLinkData?: Array<any>
}

export class ActorStore extends CommonStore {
  public pageData: Array<any> | undefined = []
  getActorPageData = (): Promise<any> => {
    let tempUrl = "https://www.imdb.com/name/nm0005380"
    return ActorApi.getActorData(tempUrl).then(actorData => {
      this.pageData = actorData.img
    })
  };
}


decorate(ActorStore, {
  pageData: observable,
  getActorPageData: action
})
