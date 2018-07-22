import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './App';
import { counter,addGUN,removeGUN,addGunAsync} from './index.redux'

//新建store，以props形式传给App
const store = createStore(counter,compose(
	applyMiddleware(thunk),
	window.devToolsExtension? window.devToolsExtension():()=>{}
))
// ReactDOM.render(<App store={store} addGUN={addGUN} removeGUN={removeGUN}/>, document.getElementById('root'));
function render(){
	ReactDOM.render(<App store={store} addGUN={addGUN} removeGUN={removeGUN} addGunAsync={addGunAsync}/>, document.getElementById('root'));
}

render()
store.subscribe(render) //订阅render函数，每次render有状态变化都会重新执行
