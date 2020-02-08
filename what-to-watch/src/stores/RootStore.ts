import { UiPreferenceStore } from './UiPreferenceStore';
import { RouterStore } from 'mobx-react-router';
import { ActorStore } from './ActorStore';

export class RootStore {
    routerStore: RouterStore
    uiPreferenceStore: UiPreferenceStore
    actorStore: ActorStore
    constructor() {
        this.routerStore = new RouterStore();
        this.uiPreferenceStore = new UiPreferenceStore(this);
        this.actorStore = new ActorStore(this);

    }
}