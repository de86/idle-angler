import * as React from 'react';

import {consoleMessage} from './styles.css';



interface IConsoleMessageProps {
    message: string;
}

const ConsoleMessage: React.FC<IConsoleMessageProps> = ({message}: IConsoleMessageProps) => (
    <div className={consoleMessage}>{message}</div>
);

export default ConsoleMessage;
