import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import Login from './container/login/login'
import Register from './container/register/register'
import BossInfo from './container/bossinfo/bossinfo'
import AuthRoute from './component/authroute/authroute'
import reducers from './reducer'
import './config'
import './index.css'
//新建store，以props形式传给App
const store = createStore(reducers,compose(
	applyMiddleware(thunk),
	window.devToolsExtension? window.devToolsExtension():()=>{}
))

ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Switch	>
					<Route path='/bossinfo' component={BossInfo}></Route>
					<Route path='/login' component={Login}></Route>
					<Route path='/register' component={Register}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
);


