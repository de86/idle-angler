import {createAction} from '../../helpers/actions';

export interface IConsoleAction<T> {
    type: ConsoleActionTypes;
    payload: T;
}

export enum ConsoleActionTypes {
    PushMessage = 'PUSH_MESSAGE',
    PushMultipleMessages = 'PUSH_MULTI_MESSAGE',
    PushCommand = 'PUSH_COMMAND',
    ClearConsole = 'CLEAR_CONSOLE',
}


const createConsoleAction = <T>(type: ConsoleActionTypes, payload: T) =>
    createAction<ConsoleActionTypes, T>(type, payload);

    
export const pushMessageAction = (message: string) =>
    createConsoleAction<string>(ConsoleActionTypes.PushMessage, message);

export const PushMultipleMessagesAction = (messages: string[]) =>
    createConsoleAction<string[]>(ConsoleActionTypes.PushMultipleMessages, messages);

export const pushCommandAction = (command: string) =>
    createConsoleAction<string>(ConsoleActionTypes.PushCommand, command);

export const clearConsoleAction = () =>
    createConsoleAction<null>(ConsoleActionTypes.ClearConsole, null);

export default {
    pushMessage: pushMessageAction,
    pushMultipleMessages: PushMultipleMessagesAction,
    pushCommand: pushCommandAction,
    clearConsole: clearConsoleAction,
};
