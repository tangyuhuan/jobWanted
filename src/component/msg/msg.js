import React,{Component} from 'react'
import {connect} from 'react-redux'
import {List,Badge} from 'antd-mobile'
@connect(
    state=>state
)
class Msg extends Component{
    getLast(arr){
        return arr[arr.length-1]
    }
    render(){
        const userid = this.props.user._id
        const msgGroup = {}
        const userinfo = this.props.chat.users
        this.props.chat.chatmsg.forEach(v=>{
            //不存在就默认是个空数组
            msgGroup[v.chatid] = msgGroup[v.chatid] || []
            msgGroup[v.chatid].push(v)
        })
        const chatList = Object.values(msgGroup).sort((a,b)=>{
            const a_last = this.getLast(a).create_time
            const b_last = this.getLast(b).create_time
            return a_last - b_last
        })//把对象所有的value拿出来组成一个数组
        console.log(chatList)
        return(
            <div> 
                {chatList.map(v=>{
                    const lastItem = this.getLast(v)
                    const targetId = v[0].from === userid?v[0].to:v[0].from
                    const unreadNum = v.filter(v=>!v.read&&v.to===userid).length
                    if(!userinfo[targetId]){
                        return null
                    }
                    const name = userinfo[targetId].name
                    const avatar = userinfo[targetId].avatar
                    return(
                        <List key={lastItem._id}>
                        <List.Item 
                        extra={<Badge text={unreadNum}></Badge>}
                        thumb={require(`../img/${avatar}.jpeg`)}
                        arrow='horizontal'
                        onClick={()=>{
                            this.props.history.push(`/chat/${targetId}`)
                        }}
                        >   
                            {lastItem.content}
                            <List.Item.Brief>{name}</List.Item.Brief>
                        </List.Item>
                        </List>
                    )
                })}
            </div>
        )
    }
}
export default Msg

