export interface IDispatchAction {
    type: ConsoleActions;
    payload: unknown;
}

export enum ConsoleActions {
    PushMessage = 'PUSH_MESSAGE',
    PushCommand = 'PUSH_COMMAND',
    ClearConsole = 'CLEAR_CONSOLE',
}

export function getPushMessageAction (message: string): IDispatchAction {
    return {
        type: ConsoleActions.PushMessage,
        payload: message,
    };
}

export function getPushCommandAction (command: string): IDispatchAction {
    return {
        type: ConsoleActions.PushCommand,
        payload: command,
    };
}

export function getClearConsoleAction (): IDispatchAction {
    return {
        type: ConsoleActions.ClearConsole,
        payload: null,
    };
}
