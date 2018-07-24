import React,{Component} from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile';

class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			type: 'genius' //或者boss
		}
		this.register = this.register.bind(this)
	}
	register(){
		this.props.history.push('./register')
	}
	render(){
		const RadioItem = Radio.RadioItem;
		return (
			<div>
				<Logo />
				 <WingBlank>
				 	<List>
				 		<InputItem>用户名</InputItem>
				 		<InputItem>密码</InputItem>
				 		<InputItem>确认密码</InputItem>
				 		<RadioItem checked={this.state.type=='genius'}>
				 			牛人
				 		</RadioItem>
				 		<RadioItem checked={this.state.type=='boss'}>
				 			BOSS
				 		</RadioItem>
				 	</List>
				 	<WhiteSpace />
				 	<Button onClick={this.register} type='primary'>注册</Button>
				 </WingBlank>
			</div>
		)
	}
}
export default Login