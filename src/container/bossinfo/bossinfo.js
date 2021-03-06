import React,{Component} from 'react'
import { NavBar, InputItem, TextareaItem,Button } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import { connect } from 'react-redux'
import { update } from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
	state=>state.user,
	{update}
)
class BossInfo extends Component{
	constructor(props){
			super(props);
			this.state = {
				title:'',
				company:'',
				money:'',
				desc:'',
				avatar:'',
			}
	}
	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}
	render(){
		const path = this.props.location.pathname;
		const redirect = this.props.redirectTo;
		return(
			<div>
				{redirect&&redirect!=path?<Redirect to={redirect} />:null}
			    <NavBar mode="dark">BOSS完善信息页面</NavBar>
			    <AvatarSelector selecAvatar={(imgName)=>{
			    	this.setState({
			    		avatar:imgName,
			    	})
			    }}
			    ></AvatarSelector>
			    <InputItem onChange={v=>this.handleChange('title',v)}>
			    招聘职位
			    </InputItem>
				<InputItem onChange={v=>this.handleChange('company',v)}>
			    公司名称
			    </InputItem>
			    <InputItem onChange={v=>this.handleChange('money',v)}>
			    职位薪资
			    </InputItem>
			    <TextareaItem rows={4} autoHeight title='职位要求'
			    onChange={v=>this.handleChange('desc',v)}>
			    </TextareaItem>
			    <Button 
			    onClick={()=>{
			    	this.props.update(this.state)
			    }}
			    type="primary">保存</Button>
		    </div>
		)
	}
}

export default BossInfo

