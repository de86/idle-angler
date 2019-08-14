import * as React from 'react';
import {useDispatch} from 'react-redux';

import {parseCommand} from '../../../lib/commands';

import {consoleInput} from './styles.css';

import {pushMessageAction} from '../../../store/actions/console';



const KEY_ENTER = 'Enter';



const ConsoleInput: React.FC = () => {

    const dispatch = useDispatch();

    const onKeyDownParseCommand = (e): void => {
        if (e.key === KEY_ENTER) {
            dispatch(pushMessageAction(e.target.value));
            parseCommand(e.target.value);
            e.target.value = '';
        }
    };

    return (
        <input
            className={consoleInput}
            type="text"
            onKeyDown={onKeyDownParseCommand}
        />
    );
};

export default ConsoleInput;
