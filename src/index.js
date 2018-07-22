import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './App';
import { counter,addGUN,removeGUN} from './index.redux'
//新建store，以props形式传给App
const store = createStore(counter)
// ReactDOM.render(<App store={store} addGUN={addGUN} removeGUN={removeGUN}/>, document.getElementById('root'));
function render(){
	ReactDOM.render(<App store={store} addGUN={addGUN} removeGUN={removeGUN}/>, document.getElementById('root'));
}

render()
store.subscribe(render) //订阅render函数，每次render有状态变化都会重新执行
