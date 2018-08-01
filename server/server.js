const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const model = require('./model')
const Chat = model.getModel('chat')

const app = express()
//work with express,就需要把socket.io和http联合起来 
const server = require('http').Server(app)
const io = require('socket.io')(server) //io就和express关联起来了
//io是全局的链接 ，socket是当前这次链接的请求
io.on('connection',function(socket){
	socket.on('sendmsg',function(data){
		const {from,to,msg} = data
		//让两个用户的聊天有唯一的id
		const chatid = [from,to].sort().join('_')
		Chat.create({chatid,from,to,content:msg},function(err,doc){
			io.emit('recvmsg',Object.assign({},doc._doc))
		})
	})
})
const userRouter = require('./user')
//新建app
//app.use 开启一个中间件,如果是路由就先输一个前缀
//在入口目录设置前缀/user，即只要和这个前缀相关的，它的子路由就由userRouter来定义
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
//监听端口
server.listen(9093,function(){
	console.log('Node app start at port 9093')
})


