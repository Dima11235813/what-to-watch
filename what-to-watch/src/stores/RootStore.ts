import { UiPreferenceStore } from './UiPreferenceStore';
import { RouterStore } from 'mobx-react-router';

export class RootStore {
    routerStore: RouterStore
    uiPreferenceStore: UiPreferenceStore
    constructor() {
        this.routerStore = new RouterStore();
        this.uiPreferenceStore = new UiPreferenceStore(this);

    }
}