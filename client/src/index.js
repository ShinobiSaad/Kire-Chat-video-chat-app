import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './vidStyles.css';
import { ContextProvider } from './SocketContext';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')

);