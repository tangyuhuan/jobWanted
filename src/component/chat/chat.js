import React,{Component} from 'react';
import {List,InputItem,NavBar} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMsgList,sendMsg,recvMsg} from '../../redux/chat.redux'

@connect(
	state=>state,
	{getMsgList, sendMsg, recvMsg}
)
class Chat extends Component{
	constructor(props){
		super(props)
		this.state={
			text:'',
			msg: []
		}
	}
	componentDidMount(){
		this.props.getMsgList()
		this.props.recvMsg()
		// socket.on('recvmsg',(data)=>{
		// 	this.setState({
		// 		msg:[...this.state.msg, data.text]
		// 	})
		// })
	}
	handleSubmit(){
		//socket.emit('sendmsg',{text:this.state.text})
		const from  = this.props.user._id
		const to = this.props.match.params.user
		const msg = this.state.text
		this.props.sendMsg({from,to,msg})
		this.setState({text:''})//发送完之后把state清空一下
	}
	render(){
		const user = this.props.match.params.user //当前聊天的目标
		return (
			<div id='chat-page'>
				<NavBar mode='dark'>
					{this.props.match.params.user}
				</NavBar>

				{this.props.chat.chatmsg.map(v=>{
					return v.from ==user?(
						<List key={v._id}>
							<List.Item>{v.content}</List.Item>
						</List>
					):(
						<List key={v._id}>
							<List.Item extra='avatar' className='chat-me'>{v.content}</List.Item>
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
						 extra={<span onClick={()=>this.handleSubmit()}> 发送</span>}
						 />
					</List>
				</div>
			</div>
		)
	}
}
export default Chat


//<h2>chat with user:{this.props.match.params.user}</h2>