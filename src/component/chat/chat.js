import React,{Component} from 'react';
import {List,InputItem,NavBar,Icon,Grid} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMsgList,sendMsg,recvMsg} from '../../redux/chat.redux'
import {getChatId} from '../../util'
@connect(
	state=>state,
	{getMsgList, sendMsg, recvMsg}
)
class Chat extends Component{
	constructor(props){
		super(props)
		this.state={
			text:'',
			showEmoji:false,
		}
	}
	componentDidMount(){
		if(!this.props.chat.chatmsg.length){
			this.props.getMsgList()
			this.props.recvMsg()
		}
	}
	fixCarousel(){
		setTimeout(function(){
			window.dispatchEvent(new Event('resize'))
		},0)
	}
	handleSubmit(){
		//socket.emit('sendmsg',{text:this.state.text})
		const from  = this.props.user._id
		const to = this.props.match.params.user
		const msg = this.state.text
		this.props.sendMsg({from,to,msg})
		this.setState({text:''})//发送完之后把state清空一下
	}
	letEmojiShow=()=>{
		this.setState({
			showEmoji:!this.state.showEmoji
		})
		this.fixCarousel()
	}
	render(){
		const emoji = '😃 😂 😍 🤣 😘 😉 😊 🤗 🤔 😏 😓 😭 😇 😎 😉 😋 😄 😨 😩 😈 👿 👍 👌 💪'
						.split(' ')
						.filter(v=>v) 
						.map(v=>({text:v})) 
		const userid = this.props.match.params.user //当前聊天的目标
		const users = this.props.chat.users
		const chatid = getChatId(userid, this.props.user._id)
		const chatmsgs = this.props.chat.chatmsg.filter(v=>v.chatid==chatid)
		if(!users[userid]){
			return null
		}
		return (
			<div id='chat-page'>
				<NavBar 
					mode='dark' 
					icon={<Icon type='left' />}
					onLeftClick={()=>{
						this.props.history.goBack()
					}}
					>
					{users[userid].name}
				</NavBar>
				{chatmsgs.map(v=>{
					const avatar = require(`../img/${users[v.from].avatar}.jpeg`)
					return v.from ==userid?(
						<List key={v._id}>
							<List.Item
								thumb = {avatar}
							>{v.content}</List.Item>
						</List>
					):(
						<List key={v._id}>
							<List.Item extra={<img src={avatar}/>} className='chat-me'>{v.content}</List.Item>
						</List>
					)
				})}
				<div className="stick-footer">
					<List>
						<InputItem
						 placeholder='请输入'
						 value={this.state.text}
						 onChange={v=>{
						 	this.setState({text:v})
						 }}
						 extra={
							<div>
								<span style={{marginRight:15}}
								onClick={this.letEmojiShow}
								>😊</span>
								<span onClick={()=>this.handleSubmit()}> 发送</span>
							</div>
						 }
						 />
					</List>
					{this.state.showEmoji?<Grid 
					data={emoji}
					columnNum={6}
					carouselMaxRow={2}
					isCarousel
					onClick={el => {
						this.setState({
							text:this.state.text+el.text
						})
					}}
					/>:null}
					
				</div>
			</div>
		)
	}
}
export default Chat
//test


