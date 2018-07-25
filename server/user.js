//跟用户相关的所有express接口全放在user.js中
const express = require('express')
const Router = express.Router()

Router.get('/info',function(req,res){
	//根据用户有无cookie，返回不同的信息
	return res.json({code:0})
})

module.exports = Router