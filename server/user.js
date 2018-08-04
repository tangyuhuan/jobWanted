//跟用户相关的所有express接口全放在user.js中
const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const Chat = model.getModel('chat')
const utils = require('utility')
const _filter = {'pwd':0,'__v':0}
// Chat.remove({},function(err,doc){

// })
Router.get('/list',function(req,res){
	//清除一下之前list中的数据
	//User.remove({},function(err,doc){})
	const { type } = req.query //通过req.query获取get参数
	User.find({type},function(err,doc){
		return res.json({code:0,data:doc})
	})
})
Router.get('/getmsglist',function(req,res){
	//从cookie中获取用户所有信息
	const user = req.cookies.userid
	User.find({},function(err,userdoc){
		let users = {}
		userdoc.forEach(v=>{
			users[v._id] = {name:v.user,avatar:v.avatar}
		})
		//之前查询聊天信息的时候是查询所有信息，这样你和不同人聊天信息就会混在一起
		//$or查询多个条件，之后分别用数组放置多个条件
		Chat.find({'$or':[{from:user},{to:user}]},function(err,doc){
			if(!err){
				return res.json({code:0,msgs:doc,users:users})
			}
		})
	})
})
Router.post('/readmsg',function(req,res){
	const userid = req.cookies.userid
	const {from} = req.body
	//修改的结果
	//mongoose的update默认修改第一个找到的,{'multi':true}使得修改多行
	Chat.update(
		{from,to:userid},
		{'$set':{read:true}},
		{'multi':true},
		function(err,doc){
		console.log(doc) //{ n: 5, nModified: 0, ok: 1 }
		//n表示from和to的数据条数 nModified到底影响了多少条 ok：1表示修改语句成功
		if(!err){
			return res.json({code:0,num:doc.nModified})
		}
		return res.json({code:0,msg:'修改失败'})
	})
})
Router.post('/update',function(req,res){
	//cookie校验
	const userid = req.cookies.userid
	if(!userid){
        return json.dumps({code:1})
    }
    //查找id是否存在并更新数据,mongoose提供findByIdAndUpdate方法
    const body = req.body
    User.findByIdAndUpdate(userid,body,function(err,doc){
    	//node还不支持es6的...运算符，所以使用Object.assig将body数据和原先的合并一下
    	const data = Object.assign({},{
    		user:doc.user,
    		type:doc.type
    	},body)
    	return res.json({code:0,data})
    })
})

Router.post('/login',function(req,res){
	const {user,pwd} = req.body
	User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
		if(!doc){
			return res.json({code:1,msg:'用户名或者密码错误'})
		}
		res.cookie('userid',doc._id)
		return res.json({code:0,data:doc})
	})
})
Router.post('/register',function(req, res){
	const {user,pwd,type} = req.body
	//使用findOne查找一条数据就返回
	User.findOne({user:user},function(err,doc){
		if(doc){
			return res.json({code:1,msg:'用户名重复'})
		}
		//如果没有查到同名user就新增一条数据
		const userModel = new User({user,type,pwd:md5Pwd(pwd)})
		userModel.save(function(err,doc){
			if(err){
				return res.json({code:1,msg:'后端出错了'})
			}
			const {user, type, _id} = doc
			res.cookie('userid',_id)
			return res.json({code:0,data:{user, type, _id}})
		})
	})
})
// Router.get('/info',function(req,res){

// 	//根据用户有无cookie，返回不同的信息

// 	return res.json({code:1})

// })
Router.get('/info',function(req,res){
    //根据用户有无cookie，返回不同的信息
    //读取userid
    const {userid} = req.cookies
    if(!userid){
        //如果没有userid，就去登录
        return res.json({code:1})
    }
    User.findOne({_id:userid},_filter,function(err,doc){
        if(err){
            return res.json({code:1,msg:'后端出错了'})
        }
        if(doc){
            return res.json({code:0,data:doc})
        }
    })
})


module.exports = Router


function md5Pwd(pwd){
	const salt = 'i am a genius_455678787!#$!'
	return utils.md5(utils.md5(pwd+salt))
}