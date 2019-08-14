import {ConsoleActionTypes, IConsoleAction} from '../actions/console';

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
    action: IConsoleAction, // Union of action creator return types
): IConsoleState {
    const nextState = {...state};
    const {PushMessage, PushMultipleMessages, PushCommand, ClearConsole} = ConsoleActionTypes;

    switch (action.type) {
        case PushMessage:
            nextState.messages.unshift(action.payload);
            return nextState;

        case PushCommand:
            nextState.commands.unshift(action.payload);
            return nextState;

        case ClearConsole:
            nextState.messages = [];
            return nextState;

        case PushMultipleMessages:
            action.payload.forEach((message: string) => nextState.messages.unshift(message));
            return nextState;

        default:
            return nextState;
    }
}
