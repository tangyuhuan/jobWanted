import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './App';
import { counter } from './index.redux'
const store = createStore(counter)
function render(){
	ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

render()

// function listener(){
// 	const current = store.getState()
// 	console.log('number of guns:',current)
// }
store.subscribe(render) //每次listen的变化都会触发
