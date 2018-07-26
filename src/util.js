export function getRedirectPath({type, avatar}){
	//根据用户信息 返回跳转地址
	// 1根据user.type  跳转boss 或 genius
	// 2再根据用户是否有头像user.avatar 跳转 bossinfo 或 geniusinfo
	let url = (type==='boss')?'/boss':'/genius'
	//如果有头像，认为用户信息已经完善，否则跳转至完善信息
	if(!avatar){
		url += 'info'
	}
	return url
}