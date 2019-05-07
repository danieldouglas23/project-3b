import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from '../src/Routes';

import registerServiceWorker from './registerServiceWorker';
// import '@appbaseio/reactivesearch/dist/css/style.min.css';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
