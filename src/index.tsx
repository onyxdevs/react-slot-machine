import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import SlotMachine from './containers/SlotMachine';
import './lib/styles/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <main className='container'>
            <SlotMachine />
        </main>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
