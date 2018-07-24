import axios from 'axios'
import {Toast} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css';
//拦截请求
axios.interceptors.request.use(function(config){
	Toast.loading('加载中',0) // duration = 0 时，onClose 无效，toast 不会消失；隐藏 toast 需要手动调用 hide
	return config
})
//拦截响应
axios.interceptors.response.use(function(config){
	Toast.hide()
	return config
})