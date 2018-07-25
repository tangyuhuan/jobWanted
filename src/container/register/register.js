import React,{Component} from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile';

class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			user: '',
			pwd: '',
			repeatpwd: '',
			type: 'genius' //或者boss
		}
		this.handleRegister = this.handleRegister.bind(this)
	}
	handleRegister(){
		// this.props.history.push('./register')
		console.log(this.state)
	}
	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}
	render(){
		const RadioItem = Radio.RadioItem;
		return (
			<div>
				<Logo />
				 <WingBlank>
				 	<List>
				 		<InputItem
				 			onChange={v=>this.handleChange('user',v)}
				 		>用户名</InputItem>
				 		<InputItem
				 			type='password'
				 			onChange={v=>this.handleChange('pwd',v)}
				 		>密码</InputItem>
				 		<InputItem
				 			type='password'
				 			onChange={v=>this.handleChange('repeatpwd',v)}
				 		>确认密码</InputItem>
				 		<RadioItem 
				 			checked={this.state.type=='genius'}
				 			onChange={()=>this.handleChange('type','genius')}
				 		>
				 			牛人
				 		</RadioItem>
				 		<RadioItem 
				 			checked={this.state.type=='boss'}
				 			onChange={()=>this.handleChange('type','boss')}
				 		>
				 			BOSS
				 		</RadioItem>
				 	</List>
				 	<WhiteSpace />
				 	<Button onClick={this.handleRegister} type='primary'>注册</Button>
				 </WingBlank>
			</div>
		)
	}
}
export default Login