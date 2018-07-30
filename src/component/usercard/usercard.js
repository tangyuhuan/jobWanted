import React,{Component} from 'react'
import { Card, WhiteSpace, WingBlank} from 'antd-mobile';
import PropTypes from 'prop-types';
const detailStyle={
	marginBottom:'5px'
}
class UserCard extends Component{
	static propTypes={
		userlist: PropTypes.array.isRequired
	}
	constructor(props){
		super(props)
	}
	render(){
		return(
			<WingBlank>
				{this.props.userlist.map(v=>(
					v.avatar?(<Card key={v._id}>
						<Card.Header
							title={v.user}
							thumb={require(`../img/${v.avatar}.jpeg`)}
							thumbStyle={{width:50}}
							extra={<span>{v.title}</span>}
						></Card.Header>
						<Card.Body>
							{v.type==='boss'?<div style={detailStyle}>公司:{v.company}</div>:null}
							{v.desc.split('\n').map(d=>(
								<div key={d} style={detailStyle}>{d}</div>
							))}
							{v.type==='boss'?<div style={detailStyle}>薪资:{v.money}</div>:null}
						</Card.Body>
					</Card>):null
				))}
			</WingBlank>
			
		)
	}
}
export default UserCard
