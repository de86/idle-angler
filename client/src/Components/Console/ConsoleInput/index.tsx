import * as React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {pushMessage} from '../../../store/actions/console';

const ConsoleInput: React.FC = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const onClickSubmit = (): void => {
        dispatch(pushMessage(inputValue));
    };

    const onChangeUpdateInputValue = (e: React.SyntheticEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    };

    return (
        <React.Fragment>
            <input
                type="text"
                onChange={onChangeUpdateInputValue}
            ></input>
            <div onClick={onClickSubmit}>submit</div>
        </React.Fragment>
    );
};

export default ConsoleInput;
