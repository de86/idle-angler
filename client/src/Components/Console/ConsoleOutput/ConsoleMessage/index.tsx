import * as React from 'react';

interface IConsoleMessageProps {
    message: string;
}

const ConsoleMessage: React.FC<IConsoleMessageProps> = ({message}: IConsoleMessageProps) => (
    <div>{message}</div>
);

export default ConsoleMessage;
