import axios from 'axios'


//定义常量，认为登录注册出错都是ERROR_MSG
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

//用户的初始状态
const initState = {
	isAuth: false,
	msg:'',
	user:'',
	pwd:'',
	type:''

}
//reducer
export function user(state=initState,action){
	switch(action.type){
		case REGISTER_SUCCESS:
			return {...state, msg:'',isAuth:true, ...action.payload}
		case ERROR_MSG:
			return {...state, msg:action.msg, isAuth:false}
		default:
			return state
	}
}
function registerSuccess(data){
	return {type:REGISTER_SUCCESS, payload:data}
}
function errorMsg(msg){
	return {type:ERROR_MSG, msg:msg}
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
				dispatch(registerSuccess({user,pwd,type}))
			}else{
				//由后台来定errorMsg
				dispatch(errorMsg(res.data.msg))
			}
		})
    }

}

