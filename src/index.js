import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { Button } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css'; 


// ReactDOM.render(<Button>Start</Button>, document.getElementById('root'));



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
