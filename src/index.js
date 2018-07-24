import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
// import App from './App';
//import { counter } from './index.redux'
import reducers from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'
import './config'
//新建store，以props形式传给App
const store = createStore(reducers,compose(
	applyMiddleware(thunk),
	window.devToolsExtension? window.devToolsExtension():()=>{}
))
// console.log(store.getState())
// class Text extends Component{
// 	render(){
// 		console.log(this.props)
// 		//this.props.history.push('/')
// 		return <h2>测试组件{this.props.match.params.location}</h2>
// 	}
// }

//三个Link相当于导航，点击跳转到指定路由
//三个Router指定不同的路由对应的渲染组件 path后面加exact用于完全匹配（如果出现路由嵌套务必加上该参数）
//BrowserRouter内只能有一个根节点
// 登录
// 	没有登录信息，统一跳转login
// 页面  导航+显示+注销
// 	一营
// 	二营
// 	骑兵连
//如果前两个path都没有命中，就Redirect到dashboard
ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path='/login' exact component={Auth}></Route>
				<Route path='/dashboard' component={Dashboard}></Route>
				<Redirect to='/dashboard'></Redirect>
			</Switch>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
);


				//<Route path='/erying' component={Erying}></Route>
				//<Route path='/qibinglian' component={Qibinglian}></Route>