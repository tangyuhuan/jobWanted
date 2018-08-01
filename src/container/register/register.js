import React,{Component} from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register} from '../../redux/user.redux'
import jobwantForm from '../../component/jobwant-form/jobwant-form'
@connect(
	state=>state.user,
	{ register }
)
@jobwantForm
class Register extends Component{
	constructor(props){
		super(props);
		// this.state = {
		// 	user: '',
		// 	pwd: '',
		// 	repeatpwd: '',
		// 	type: 'genius' //或者boss
		// }
		this.handleRegister = this.handleRegister.bind(this)
	}
	componentDidMount(){
		this.props.handleChange('type','genius')
	}
	handleRegister(){
		this.props.register(this.props.state)
	}
	render(){
		const RadioItem = Radio.RadioItem;
		return (
			<div>
			{this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
				<Logo />
				 <WingBlank>
				 	<List>
				 		{this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
				 		<InputItem
				 			onChange={v=>this.props.handleChange('user',v)}
				 		>用户名</InputItem>
				 		<InputItem
				 			type='password'
				 			onChange={v=>this.props.handleChange('pwd',v)}
				 		>密码</InputItem>
				 		<InputItem
				 			type='password'
				 			onChange={v=>this.props.handleChange('repeatpwd',v)}
				 		>确认密码</InputItem>
				 		<RadioItem 
				 			checked={this.props.state.type==='genius'}
				 			onChange={()=>this.props.handleChange('type','genius')}
				 		>
				 			牛人
				 		</RadioItem>
				 		<RadioItem 
				 			checked={this.props.state.type==='boss'}
				 			onChange={()=>this.props.handleChange('type','boss')}
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
export default Register
