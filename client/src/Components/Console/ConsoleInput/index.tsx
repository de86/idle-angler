import * as React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {consoleInput} from './styles.css';

import {pushMessage} from '../../../store/actions/console';



const KEY_ENTER = 'Enter';

const ConsoleInput: React.FC = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const onClickSubmit = (): void => {
        dispatch(pushMessage(inputValue));
        setInputValue('');
    };

    const onChangeUpdateInputValue = (e): void => {
        setInputValue(e.target.value);
    };

    const onKeyDownCheckSubmit = (e): void => {
        if (e.key === KEY_ENTER) {
            onClickSubmit();
        }
    };

    return (
        <input
            className={consoleInput}
            type="text"
            onChange={onChangeUpdateInputValue}
            onKeyDown={onKeyDownCheckSubmit}
            value={inputValue}
        />
    );
};

export default ConsoleInput;
