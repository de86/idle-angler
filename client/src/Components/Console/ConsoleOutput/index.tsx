import * as React from 'react';
import {useSelector} from 'react-redux';

import consoleOutputSelector from './selector';

import {consoleOutputContainer, consoleOutputMessagesWrapper, gradientOverlay} from './styles.css';

import ConsoleMessage from './ConsoleMessage';



const ConsoleOutput: React.FC = () => {

    const {messages} = useSelector(consoleOutputSelector);

    return (
        <div className={consoleOutputContainer}>
            <div className={consoleOutputMessagesWrapper}>
                {messages.map((message, i) =>
                    <ConsoleMessage
                        key={`console-message${i}`}
                        message={message}
                    />)
                }
            </div>
            <div className={gradientOverlay} />
        </div>
    );
};

export default ConsoleOutput;
