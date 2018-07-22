// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// // import { Button } from 'antd-mobile';
// // import 'antd-mobile/dist/antd-mobile.css'; 


// // ReactDOM.render(<Button>Start</Button>, document.getElementById('root'));



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();



import { createStore } from 'redux'

//建立reducer,(根据老的state和action，生成新的状态的函数称之为reducer) 
function counter(state=0, action){
    switch(action.type){
        case 'add':
            return state+1
        case 'reduce':
            return state-1
        default:
            return 10
    }
}

//根据已有的reducer创建 store
const store = createStore(counter)

//store创建完成后，就可以通过 getState() 获取应用初始状态
const init = store.getState()
console.log(init)

