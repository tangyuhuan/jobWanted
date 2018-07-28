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
class GeniusInfo extends Component{
	constructor(props){
			super(props);
			this.state = {
				title:'',
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
			    <NavBar mode="dark">牛人完善信息页面</NavBar>
			    <AvatarSelector selecAvatar={(imgName)=>{
			    	this.setState({
			    		avatar:imgName,
			    	})
			    }}
			    ></AvatarSelector>
			    <InputItem onChange={v=>this.handleChange('title',v)}>
			    求职职位
			    </InputItem>
			    <InputItem onChange={v=>this.handleChange('money',v)}>
			    期望薪资
			    </InputItem>
			    <TextareaItem rows={4} autoHeight title='个人简介'
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

export default GeniusInfo

