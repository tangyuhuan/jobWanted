import React,{Component} from 'react'
import axios from 'axios'
class AuthRoute extends Component{
	componentDidMount(){
		//要获取用户信息之后，决定怎么跳转
		axios.get('/user/info')
			.then(res=>{
				if(res.status==200){
					console.log(res.data)
				}
			})
	}
	render(){
		return <p>判断跳转的地方</p>
	}	
}
export default AuthRoute