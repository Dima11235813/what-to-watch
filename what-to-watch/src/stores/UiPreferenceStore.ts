import { action, decorate, observable } from 'mobx';
import React from 'react';
import { CommonStore } from './CommonStore';
import { logToConsole, logObjToConsole } from '../utils/logger';

export class UiPreferenceStore extends CommonStore {
    darkThemeEnabled = true
}

decorate(UiPreferenceStore, {
    darkThemeEnabled: observable
})
