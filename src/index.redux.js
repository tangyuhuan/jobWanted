const ADD_GUN = 'add a gun'
const REMOVE_GUN = 'remove a gun '



//建立reducer,(根据老的state和action，生成新的状态的函数称之为reducer) 
export function counter(state=0, action){
    switch(action.type){
        case ADD_GUN:
            return state+1
        case REMOVE_GUN:
            return state-1
        default:
            return 10
    }
}
//action creator
//创建action的函数 返回一个action 
export function addGUN(){
	return {type:ADD_GUN}
}
export function removeGUN(){
	return {type:REMOVE_GUN}
}

export function addGunAsync(){
	return dispatch=>{
		setTimeout(()=>{
			//2秒之后再dispatch
			dispatch(addGUN())
		},2000)
	}
}