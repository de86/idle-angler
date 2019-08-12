import * as React from 'react';

import {app} from './styles.css';

import ConsoleInput from './Console/ConsoleInput';
import ConsoleOutput from './Console/ConsoleOutput';



const App: React.FC = () => {
    return (
        <div className={app}>
            <ConsoleOutput />
            <ConsoleInput/>
        </div>
    );
};

export default App;
