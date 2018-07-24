import React,{ Component }from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom'
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
class Text extends Component{
	render(){
		console.log(this.props)
		//this.props.history.push('/')
		return <h2>测试组件{this.props.match.params.location}</h2>
	}
}

//三个Link相当于导航，点击跳转到指定路由
//三个Router指定不同的路由对应的渲染组件 path后面加exact用于完全匹配（如果出现路由嵌套务必加上该参数）
//BrowserRouter内只能有一个根节点
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
				<Switch>
					<Route path='/' exact component={App}></Route>
					<Route path='/erying' component={Erying}></Route>
					<Route path='/qibinglian' component={Qibinglian}></Route>
					<Route path ='/:location' component={Text}></Route>
				</Switch>


			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
);


				//<Route path='/erying' component={Erying}></Route>
				//<Route path='/qibinglian' component={Qibinglian}></Route>