import {combineReducers} from 'redux';

import consoleReducer from './console';

const rootReducer = combineReducers({console: consoleReducer});

export default rootReducer;
