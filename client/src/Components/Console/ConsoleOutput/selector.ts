import {IAppState} from '../../../store';

export interface IConsoleOutputStateProps {
    messages: string[];
}

const selectLastMessages = (state: IAppState) => [...state.console.messages].reverse();

export default function consoleOutputSelector (state: IAppState): IConsoleOutputStateProps {
    return {
        messages: selectLastMessages(state),
    };
}
