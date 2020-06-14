import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/App';
import * as serviceWorker from 'serviceWorker';
import { getEnv } from 'utils/environment';

console.debug('%cОкружение: ' + getEnv(), 'font: bold 1em Arial;');

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
