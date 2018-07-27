//跟用户相关的所有express接口全放在user.js中
const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const utils = require('utility')
const _filter = {'pwd':0,'__v':0}
Router.get('/list',function(req,res){
	//清除一下之前list中的数据
	//User.remove({},function(err,doc){})
	User.find({},function(err,doc){
		return res.json(doc)
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
		// User.create({user,type,pwd:md5Pwd(pwd)},function(err,doc){
		// 	if(err){
		// 		return res.json({code:1,msg:'后端出错了'})
		// 	}
		// 	//返回code：0表示登录成功
		// 	return res.json({code:0})
		// })
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