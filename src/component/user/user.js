import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Result, List, Icon, WhiteSpace, Modal } from 'antd-mobile';
import browserCookie from 'browser-cookies'
@connect(
	state=>state.user
)
class User extends Component{
	constructor(props){
		super(props)
		this.logout = this.logout.bind(this)
	}
	logout(){
		const alert = Modal.alert
		alert('注销','确认退出登录吗？？',[
				{text:'取消', onPress: ()=> console.log('cancel')},
				{text:'确认', onPress: ()=>{
					//清除cookie
					browserCookie.erase('userid')
					//刷新页面
					window.location.href = window.location.href
				}},
			])
	}
	render(){
		const {user, type, avatar} = this.props
		const Item = List.Item;
		const Brief = Item.Brief;
		return 	user?(
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
				  	<Item onClick={this.logout}>
				  		退出登录
				  	</Item>
				  </List>
			</div>
		):null
	}
}
export default User
//在用户还没有信息时返回

	