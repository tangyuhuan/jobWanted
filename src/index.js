import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './App';
import { counter } from './index.redux'

//新建store，以props形式传给App
const store = createStore(counter,compose(
	applyMiddleware(thunk),
	window.devToolsExtension? window.devToolsExtension():()=>{}
))
// ReactDOM.render(<App store={store} addGUN={addGUN} removeGUN={removeGUN}/>, document.getElementById('root'));
ReactDOM.render(
	(<Provider store={store}>
		<App/>
	</Provider>),
	document.getElementById('root')
);
