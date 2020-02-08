import { action, decorate, observable } from 'mobx';
import React from 'react';
import { CommonStore } from './CommonStore';
import { logToConsole, logObjToConsole } from '../utils/logger';
import ActorApi from '../api/ActorData.api';

export class ActorStore extends CommonStore {
  data: any = null
  parseData = (data: any) => {
    return data
  }

  getActorData = (): Promise<any> => {
    let tempUrl = "https://www.imdb.com/name/nm0005380"
    return ActorApi.getActorData(tempUrl).then(actorData => {
      console.log(actorData)
      this.data = this.parseData(actorData)
    })
  };
}


decorate(ActorStore, {
  data: observable,
  getActorData: action
})
