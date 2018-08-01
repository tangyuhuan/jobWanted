import React,{Component} from 'react';
import io from 'socket.io-client'
class Chat extends Component{
	componentDidMount(){
		//由于现在跨域 前端端口3000 后端9093
		const socket = io('ws://localhost:9093')
	}
	render(){
		console.log(this.props)
		return (
			<h2>chat with user:{this.props.match.params.user}</h2>
		)
	}
}
export default Chat
