import axios from 'axios'
import {getRedirectPath} from '../util'
//定义常量，认为登录注册出错都是ERROR_MSG

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
//用户的初始状态
const initState = {
	redirectTo: '',
	msg:'',
	user:'',
	type:''

}
//reducer
export function user(state=initState,action){
	switch(action.type){
		case AUTH_SUCCESS:
			return {...state, msg:'',redirectTo:getRedirectPath(action.payload), ...action.payload}
		case LOAD_DATA:
			return {...state, ...action.payload}
		case ERROR_MSG:
			return {...state, msg:action.msg, isAuth:false}
		default:
			return state
	}
}
function authSuccess(data){
	return {type:AUTH_SUCCESS, payload:data}
}
function errorMsg(msg){
	return {type:ERROR_MSG, msg:msg}
}
export function loadData(userinfo){
	return { type:LOAD_DATA, payload:userinfo}
}
export function update(data){
	return dispatch=>{
		axios.post('/user/update',data)
		.then(res=>{
			if(res.status==200&&res.data.code===0){
				//loginSuccess中将后端返回给我们的信息传递过去
				dispatch(authSuccess(res.data.data))
			}else{
				//由后台来定errorMsg
				dispatch(errorMsg(res.data.msg))
			}
		})
    }
}

export function login({user,pwd}){
	if(!user||!pwd){
		return errorMsg('用户名密码必须输入')
	}
	return dispatch=>{
		axios.post('/user/login',{user,pwd})
		.then(res=>{
			if(res.status==200&&res.data.code===0){
				//loginSuccess中将后端返回给我们的信息传递过去
				dispatch(authSuccess(res.data.data))
			}else{
				//由后台来定errorMsg
				dispatch(errorMsg(res.data.msg))
			}
		})
    }

}
//对表单输入信息的校验
export function register({user,pwd,repeatpwd,type}){
	if(!user||!pwd||!type){
		return errorMsg('用户名密码必须输入')
	}
	if(pwd!==repeatpwd){
		return errorMsg('密码和校验密码不同')
	}
	//异步写法！！！
    return dispatch=>{
		axios.post('/user/register',{user,pwd,type})
		.then(res=>{
			if(res.status==200&&res.data.code===0){
				//请求成功
				dispatch(authSuccess({user,pwd,type}))
			}else{
				//由后台来定errorMsg
				dispatch(errorMsg(res.data.msg))
			}
		})
    }

}


