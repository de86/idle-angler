import store from '../store';

import consoleActions from '../store/actions/console';

import consoleTranslations from '../data/translations.json';


const COMMAND_CLEAR = 'clear';
const COMMAND_HELP = 'help';

const commandList = [
    COMMAND_CLEAR,
    COMMAND_HELP,
];

const commandsMap: Record<string, (command: string, params: string[]) => void> = {
    [COMMAND_CLEAR]: clearConsole,
    [COMMAND_HELP]: displayHelp,
};


export function parseCommand (input: string): void {
    const inputTokens = input.split(' ');

    const command = inputTokens[0].toLowerCase();
    const params = inputTokens.slice(1);

    if (commandsMap[command]) {
        commandsMap[command](command, params);
    } else {
        console.log(`Command '${command}' not found`);
    }
}


export function clearConsole (): void {
    store.dispatch(consoleActions.clearConsole());
    store.dispatch(consoleActions.pushCommand(COMMAND_CLEAR));
}


export function displayHelp (): void {
    store.dispatch(consoleActions.pushCommand(COMMAND_HELP));

    const helpText = [
        ...commandList,
        ...consoleTranslations.help,
    ];

    store.dispatch(consoleActions.pushMultipleMessages(helpText));
}
