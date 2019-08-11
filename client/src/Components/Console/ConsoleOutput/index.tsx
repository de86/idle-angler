import * as React from 'react';
import {useSelector} from 'react-redux';

import consoleOutputSelector from './selector';

import ConsoleMessage from './ConsoleMessage';

const ConsoleOutput: React.FC = () => {

    const {messages} = useSelector(consoleOutputSelector);

    return (
        <div>
            {messages.map((message, i) =>
                <ConsoleMessage
                    key={`console-message${i}`}
                    message={message}
                />)}
        </div>
    );
};

export default ConsoleOutput;
