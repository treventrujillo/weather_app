import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';
import 'semantic-ui-css/semantic.min.css';
import 'weather-icons/css/weather-icons.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
