const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'



//建立reducer,(根据老的state和action，生成新的状态的函数称之为reducer) 
export function auth(state={isAuth:false,user:'李云龙'}, action){
    switch(action.type){
        case LOGIN:
            return {...state, isAuth:true}
        case LOGOUT:
            return {...state, isAuth:false}
        default:
            return state
    }
}
//action creator
export function login(){
	return {type:LOGIN}
}
export function logout(){
	return {type:LOGOUT}
}