const express = require('express')
const utils = require('utility')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRouter = require('./user')
//新建app
const app = express()
//app.use 开启一个中间件,如果是路由就先输一个前缀
//在入口目录设置前缀/user，即只要和这个前缀相关的，它的子路由就由userRouter来定义
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
//监听端口
app.listen(9093,function(){
	console.log('Node app start at port 9093')
})
