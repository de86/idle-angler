import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers';

import {createInitialConsoleState, IConsoleState} from './reducers/console';

export interface IAppState {
    console: IConsoleState;
}

export function createInitialState (): IAppState {
    return {
        console: createInitialConsoleState(),
    };
}

export function initStore () {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk)),
    );
}

