import React,{Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
//AuthRoute只是一个普通组件，不是Route渲染的组件，没有操作路由的方法 （this.props.history）
//使用withRouter包裹AuthRoute, AuthRoute就有this.props.history对象了
@withRouter
class AuthRoute extends Component{
	componentDidMount(){
		//通过this.props.location.pathname获取当前的url，如果当前已经是登陆页或者注册页，就不用跳转
		const publicList = ['/login','/register']
		const pathname = this.props.location.pathname
		if(publicList.indexOf(pathname)>-1){
			return null
		}
		//要获取用户信息之后，决定怎么跳转
		axios.get('/user/info')
			.then(res=>{
				if(res.status==200){
					if(res.data.code==0){
						//有登录信息的
					}else{
						this.props.history.push('/login')
					}
				}
			})
	}
	render(){
		return <p>判断跳转的地方</p>
	}	
}
export default AuthRoute