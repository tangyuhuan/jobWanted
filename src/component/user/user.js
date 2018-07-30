import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Result, List, Icon, WhiteSpace } from 'antd-mobile';
@connect(
	state=>state.user
)
class User extends Component{
	render(){
		const {user, type, avatar} = this.props
		const Item = List.Item
		const Brief = Item.Brief
		return user?(
			<div>
				  <Result
				    img={<img src={require(`../img/${avatar}.jpeg`)} alt="" style={{width:50}}/>}
				    title={user}
				    message={type==='boss'?this.props.company:null}
				  />
				  <List renderHeader={()=>'简介'}>
				  	<Item multipleLine>
				  	{this.props.title}
				  	{this.props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
				  	{this.props.money?<Brief>薪资:{this.props.money}</Brief>:null}
				  	</Item>
				  </List>
				  <WhiteSpace />
				  <List>
				  	<Item>
				  		退出登录
				  	</Item>
				  </List>
			</div>
		):null
	}
}
export default User
//在用户还没有信息时返回