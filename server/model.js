const mongoose = require('mongoose')
//链接mongo 并且使用imooc-chat这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat'
mongoose.connect(DB_URL)

//mongoose.model新建一个数据模型，new mongoose.Schema为整个数据模型传入对象。
const models = {
	user:{
		'user':{type:String, require:true},
		'pwd':{type:String, require:true},
		'type':{type:String, require:true},
		//头像
		'avatar':{'type':String},
		//个人简介or职位简介
		'desc':{'type':String},
		//职位名
		'title':{'type':String},
		//如果你是boss 还有两个字断
		'company':{'type':String},
		'money':{'type':String}
	},
	chat:{
		'chatid':{'type':String, require:true}, //每一个聊天的唯一标识
		'from':{'type':String, require:true},
		'to':{'type':String, require:true},
		'read': {'type':Boolean, default:false}, //对to用户而言读的zhuang t
		'content':{'type':String, require:true,default:''},
		'create_time':{'type':Number, default:new Date().getTime()}
	}
}

for(let m in models){
	mongoose.model(m, new mongoose.Schema(models[m]))
}
module.exports = {
	getModel:function(name){
		return mongoose.model(name)
	}
}