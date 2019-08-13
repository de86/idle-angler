import store from '../store';

import {getClearConsoleAction, getPushCommandAction} from '../store/actions/console';

const COMMAND_CLEAR = 'clear';

const consoleCommandsDictionary: Record<string, (command: string, params: string[]) => void> = {
    [COMMAND_CLEAR]: clearConsole,
};

export function clearConsole (command: string): void {
    store.dispatch(getClearConsoleAction());
    store.dispatch(getPushCommandAction(command));
}

export function parseCommand (input: string): void {
    const inputTokens = input.split(' ');

    const command = inputTokens[0].toLowerCase();
    const params = inputTokens.slice(1);

    if (consoleCommandsDictionary[command]) {
        consoleCommandsDictionary[command](command, params);
    } else {
        console.log(`Command '${command}' not found`);
    }
}
