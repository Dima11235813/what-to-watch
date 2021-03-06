import { UiPreferenceStore } from './UiPreferenceStore';
import { RouterStore } from 'mobx-react-router';
import { ActorStore } from './ActorStore';
import { ActorQueryStore } from './ActorQuery';

export class RootStore {
    routerStore: RouterStore
    uiPreferenceStore: UiPreferenceStore
    actorStore: ActorStore
    actorQueryStore: ActorQueryStore
    constructor() {
        this.routerStore = new RouterStore();
        this.uiPreferenceStore = new UiPreferenceStore(this);
        this.actorStore = new ActorStore(this);
        this.actorQueryStore = new ActorQueryStore(this);

    }
}