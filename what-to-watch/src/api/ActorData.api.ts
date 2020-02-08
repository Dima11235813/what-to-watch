import { callDataApi } from './CustomFetch';

export default class ActorApi {

  static getActorData(url: string): Promise<any> {
    return callDataApi<any>(`/api/actor/data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"url": url}),
    });
  }
  static getActorSearchQueryResult(url: string): Promise<any> {
    return callDataApi<any>(`/api/actor/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"url": url}),
    });
  }
}
