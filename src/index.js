import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import App from './App.js'
// import Login from './container/login/login'
// import Register from './container/register/register'
// import BossInfo from './container/bossinfo/bossinfo'
// import GeniusInfo from './container/geniusinfo/geniusinfo'
// import AuthRoute from './component/authroute/authroute'
// import Dashboard from './component/dashboard/dashboard'
// import Chat from './component/chat/chat'


import reducers from './reducer'
import './config'
import './index.css'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))
//boss genius me msg四个页面
ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
);


