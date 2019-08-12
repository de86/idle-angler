import {IAppState} from '../../../store';

export interface IConsoleOutputStateProps {
    messages: string[];
}

const MAX_MESSAGES_TO_DISPLAY = 30;

const selectLastMessages = (state: IAppState) => {
    const selected = [...state.console.messages]
        .slice(0, MAX_MESSAGES_TO_DISPLAY)
        .reverse();

    console.log([...state.console.messages]);
    console.log(selected);

    return selected;
}

export default function consoleOutputSelector (state: IAppState): IConsoleOutputStateProps {
    return {
        messages: selectLastMessages(state),
    };
}
