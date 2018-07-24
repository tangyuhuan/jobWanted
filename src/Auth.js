import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login,getUserData } from './Auth.redux'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'
//两个reducers 每个reducer都有一个state
//合并reducer
@connect(
	state=>state.auth,
	{ login, getUserData }
)
class Auth extends Component{

	componentDidMount(){
		this.props.getUserData()
	}
	render(){
		return (
			<div>
				<h2>我的名字是{this.props.user},年龄{this.props.age}</h2>
				{ this.props.isAuth?<Redirect to='/dashboard' />:null}
				<h2>你没有权限，需要登录</h2>
				<button onClick={this.props.login}>登录</button>
			</div>
		)
	}
}

export default Auth