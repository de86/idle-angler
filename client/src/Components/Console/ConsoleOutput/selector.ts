import {IAppState} from '../../../store';

export interface IConsoleOutputStateProps {
    messages: string[];
}

export default function consoleOutputSelector (state: IAppState): IConsoleOutputStateProps {
    return {
        messages: state.console.messages,
    };
}
