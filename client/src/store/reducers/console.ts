import {ConsoleActions, IDispatchAction} from '../actions/console';

export interface IConsoleState {
    messages: string[];
    commands: string[];
}

export function createInitialConsoleState (): IConsoleState {
    return {
        messages: [],
        commands: [],
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

        case ConsoleActions.PushCommand:
            nextState.commands.unshift(action.payload);
            return nextState;

        case ConsoleActions.ClearConsole:
            nextState.messages = [];
            return nextState;

        default:
            return nextState;
    }
}
