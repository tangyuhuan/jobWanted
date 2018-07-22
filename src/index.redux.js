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

store.dispatch({type:'add'})









// import { createStore } from 'redux'

// //建立reducer,(根据老的state和action，生成新的状态的函数称之为reducer) 
// function counter(state=0, action){
//     switch(action.type){
//         case 'add':
//             return state+1
//         case 'reduce':
//             return state-1
//         default:
//             return 10
//     }
// }

// //1.根据已有的reducer创建 store
// const store = createStore(counter)

// //2.store创建完成后，就可以通过 getState() 获取应用初始状态
// const init = store.getState()
// console.log(init)


// //4.为了能准确知道应用状态更新的事件，需要向store注册一个监听函数store.subscribe()
// //监听器里可以调用 store.getState() 获得当前 state。
// function listener(){
// 	const current = store.getState()
// 	console.log('number of guns:',current)
// }
// store.subscribe(listener) //每次listen的变化都会触发

// //当需要修改state时，通过store的dispatch方法发起一系列 action，发给reducer去处理
// //3.派发事件，传递action，括号内就是action，action：描述应用发生了什么操作。一个普通的js对象
// store.dispatch({type:'add'})
// store.dispatch({type:'add'})
// store.dispatch({type:'add'})