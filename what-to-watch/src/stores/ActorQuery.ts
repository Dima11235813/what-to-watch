import { action, decorate, observable } from 'mobx';
import { CommonStore } from './CommonStore';
import ActorApi from '../api/ActorData.api';

export class ActorQueryStore extends CommonStore {
  searchResults:  Array<any> | undefined = []
  getActorsBySearch = (query: string): Promise<any> => {
    let tempUrl = `https://www.imdb.com/find?s=nm&q=${query}`
    return ActorApi.getActorSearchQueryResult(tempUrl).then(actorData => {
      this.searchResults = actorData
    })
  }
}


decorate(ActorQueryStore, {
  searchResults: observable,
  getActorsBySearch: action
})
