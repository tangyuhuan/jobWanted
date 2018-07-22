import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link} from 'react-router-dom'
import App from './App';
import { counter } from './index.redux'

//新建store，以props形式传给App
const store = createStore(counter,compose(
	applyMiddleware(thunk),
	window.devToolsExtension? window.devToolsExtension():()=>{}
))
function Erying(){
	return <h2>二营</h2>
}
function Qibinglian(){
	return <h2>骑兵连</h2>
}
//三个Link相当于导航，跳转到不同的页面
//三个Router用于针对不同的路由显示不同的组件 path后面加exact用于完全匹配
ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<ul>
					<li>
						<Link to='/'>一营</Link>
					</li>
					<li>
						<Link to='/erying'>二营</Link>
					</li>
					<li>
						<Link to='/qibinglian'>骑兵连</Link>
					</li>
				</ul>
				<Route path='/' exact component={App}></Route>
				<Route path='/erying' component={Erying}></Route>
				<Route path='/qibinglian' component={Qibinglian}></Route>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
);
