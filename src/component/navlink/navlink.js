import React,{Component} from 'react'
import {TabBar} from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
@withRouter
@connect(
	state=>state.chat
)
class NavLinkBar extends Component{
	constructor(props){
		super(props)
		
	}
	static propTypes={
		data: PropTypes.array.isRequired
	}

	render(){
		const navList = this.props.data.filter(v=>!v.hide) //过滤掉hide是true的，从导航栏中去掉
		const {pathname} = this.props.location //获取导航路径
		return(
			<div style={{position: 'fixed', height: '100%', width: '100%', top: 0}}>
			<TabBar>
				{navList.map(v=>(
					<TabBar.Item
						badge={v.path=='/msg'?this.props.unread:0}
						key={v.path}
						title={v.text}
						icon={{uri:require(`./img/${v.icon}.png`)}}
						selectedIcon={{uri:require(`./img/${v.icon}-active.png`)}}
						selected={pathname===v.path}
						onPress={()=>{
							this.props.history.push(v.path)
						}}
					>
					{this.props.children}
					</TabBar.Item>
				))}
			</TabBar>
			</div>

		)
	}
}
export default NavLinkBar

