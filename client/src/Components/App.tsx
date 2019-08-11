import * as React from 'react';

import ConsoleInput from './Console/ConsoleInput';
import ConsoleOutput from './Console/ConsoleOutput';

const App: React.FC = () => {
    return (
        <div>
            <ConsoleOutput />
            <ConsoleInput />
        </div>
    );
};

export default App;
