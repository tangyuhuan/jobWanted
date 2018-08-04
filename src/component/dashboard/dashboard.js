import React,{Component} from 'react'
import { NavBar} from 'antd-mobile';
import NavLinkBar from '../navlink/navlink'
import {connect} from 'react-redux'
import { Route, Switch, Redirect} from 'react-router-dom'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import User from '../user/user'
import Msg from '../msg/msg'
import {getMsgList,recvMsg} from '../../redux/chat.redux'
import QueueAnim from 'rc-queue-anim'
@connect(
	state=>state,
	{getMsgList,recvMsg}
)
class Dashboard extends Component{
	componentDidMount(){
		if(!this.props.chat.chatmsg.length){
			this.props.getMsgList()
			this.props.recvMsg()
		}
	}
	render(){
		const user = this.props.user //redux中的用户数据
		//header和footer要显示的四个页面的数据,页面要跳转的链接、显示的文字
		const {pathname} = this.props.location
		const navList = [
			{
				path: '/boss',
				text: '牛人', //boss要看到的是牛人列表
				icon: 'boss',
				title: '牛人列表',
				component:Boss,//所要渲染的组件
				hide: user.type=='genius'//根据user.type来判断此时类型是boss还是genius，是genius，boss看到的列表就需要隐藏
			},
			{
				path: '/genius',
				text: 'boss', //boss要看到的是牛人列表
				icon: 'job',
				title: 'BOSS列表',
				component:Genius,//所要渲染的组件
				hide: user.type=='boss'
			},
			{
				path: '/msg',
				text: '消息', //boss要看到的是牛人列表
				icon: 'msg',
				title: '消息列表',
				component:Msg,//所要渲染的组件
			},
			{
				path: '/me',
				text: '我', //boss要看到的是牛人列表
				icon: 'user',
				title: '个人中心',
				component:User,//所要渲染的组件
			},
		]
		const page = navList.find(v=>v.path==pathname)
		return page?(
			<div>
		    	<NavLinkBar data={navList}>
					{/*header页面*/}
			    	<NavBar>{page.title}</NavBar>
			    	<div style={{marginTop:10}}>
				    	<Switch>
							<QueueAnim type='scale' delay={200}>
				    		{navList.map(v=>(
				    			<Route key={v.path} path={v.path} component={v.component}></Route>
							))}
							</QueueAnim>
				    	</Switch>
			    	</div>
		    	</NavLinkBar>
		    </div>
		):<Redirect to='/msg'></Redirect>
	}
}
export default Dashboard


