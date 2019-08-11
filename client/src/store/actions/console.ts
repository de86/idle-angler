export interface IDispatchAction {
    type: ConsoleActions;
    payload: unknown;
}

export enum ConsoleActions {
    PushMessage = 'PUSH_MESSAGE',
}

export function pushMessage (message: string): IDispatchAction {
    return {
        type: ConsoleActions.PushMessage,
        payload: message,
    };
}
