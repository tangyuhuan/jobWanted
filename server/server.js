const express = require('express')
const mongoose = require('mongoose')
//链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
	console.log('mongo connect success！！')
})
//新建数据模型 mongo里有文档的概念、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
	user:{type:String,require:true},
	age:{type:Number,require:true}
}))
//新增数据
// User.create({
// 	user:'imooc3',
// 	age:22
// },function(err,doc){
// 	if(!err){
// 	console.log(doc)
// 	}else{
// 	console.log(err)
// 	}	
// })

//更新数据，更新采用'$set' 当然也可以省略
// User.update({'user':'imooc2'},{'$set':{age:25}},function(err,doc){
// 	console.log(doc)
// })
//删除数据
// User.remove({age:18},function(err,doc){
// 	if(!err){
// 		console.log(doc)
// 	}
// })

//新建app
const app = express()
//访问根目录显示
app.get('/',function(req,res){
	res.send('<h1>Hello World</h1>')
})
//返回json数据
//新增数据完成后，查找数据，如果是查询所有没有过滤条件，传一个{}即可
app.get('/data',function(req,res){
	User.find({user:'imooc3'},function(err,doc){
		res.json(doc)
	})
	//res.json({name:'imooc',type:'ITtttt'})
})
//监听端口
app.listen(9093,function(){
	console.log('Node app start at port 9093')
})
