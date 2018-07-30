import React,{Component} from 'react'
import axios from 'axios'
import { Card, WhiteSpace, WingBlank} from 'antd-mobile';
// import PropTypes from 'prop-types';
class Boss extends Component{
	constructor(props){
		super(props)
		this.state={
			data:[]
		}
	}
	componentDidMount(){
		axios.get('/user/list?type=genius')
			.then(res=>{
				if(res.data.code===0){
					this.setState({data:res.data.data})
				}
			})
	}
	render(){
		console.log(this.state)
		this.state.data.map(v=>(console.log(`../img/${v.avatar}.png`)))
		return(
			<WingBlank>
				{this.state.data.map(v=>(
					v.avatar?(<Card key={v._id}>
						<Card.Header
							title={v.user}
							thumb={require(`../img/${v.avatar}.jpeg`)}
							thumbStyle={{width:50}}
							extra={<span>{v.title}</span>}
						></Card.Header>
						<Card.Body>
							{v.desc.split('\n').map(v=>(
								<div key={v}>{v}</div>
							))}
						</Card.Body>
					</Card>):null
				))}
			</WingBlank>
			
		)
	}
}
export default Boss
//electedIcon={{uri:require(`../img/${v.avatar}.png`)}}
//thumb={require(`../img/${v.avatar}.png`)}