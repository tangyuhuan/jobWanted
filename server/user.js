//跟用户相关的所有express接口全放在user.js中
const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const utils = require('utility')
Router.get('/list',function(req,res){
	User.find({},function(err,doc){
		return res.json(doc)
	})
})
Router.post('/register',function(req, res){
	console.log(req.body)
	const {user,pwd,type} = req.body
	//使用findOne查找一条数据就返回
	User.findOne({user:user},function(err,doc){
		if(doc){
			return res.json({code:1,msg:'用户名重复'})
		}
		//如果没有查到同名user就新增一条数据
		User.create({user,type,pwd:md5Pwd(pwd)},function(err,doc){
			if(err){
				return res.json({code:1,msg:'后端出错了'})
			}
			//返回code：0表示登录成功
			return res.json({code:0})
		})
	})
})
Router.get('/info',function(req,res){
	//根据用户有无cookie，返回不同的信息
	return res.json({code:0})
})

module.exports = Router


function md5Pwd(pwd){
	const salt = 'i am a genius_455678787!#$!'
	return utils.md5(utils.md5(pwd+salt))
}