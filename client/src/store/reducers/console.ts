import {ConsoleActions, IDispatchAction} from '../actions/console';

export interface IConsoleState {
    messages: string[];
}

export function createInitialConsoleState (): IConsoleState {
    return {
        messages: [],
    };
}

export default function consoleReducer (
    state: IConsoleState = createInitialConsoleState(),
    action: IDispatchAction,
): IConsoleState {
    const nextState = {...state};

    switch (action.type) {
        case ConsoleActions.PushMessage:
            nextState.messages.unshift(action.payload);
            return nextState;

        default:
            return nextState;
    }
}