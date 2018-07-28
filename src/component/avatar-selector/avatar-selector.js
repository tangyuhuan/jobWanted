import React,{Component} from 'react'
import { Grid, List} from 'antd-mobile';
class AvatarSelector extends Component{
	constructor(props){
		super(props)
		this.state={}
	}
	render(){
		const avatarList = ['cat','crab','deer','dog','man','mouse','pikaqiu','sheep']
						.map(v=>({
							icon:require(`../img/${v}.jpeg`),
							text:v,
						}))

		const gridHeader = this.state.icon?(<div>
												<span>已选择头像</span>
												<img style={{width:20}} src={this.state.icon} alt="" />
											</div>):'请选择头像'

		return(
			<List renderHeader={()=>gridHeader}>
				<Grid data={avatarList} columnNum={4} 
					onClick={elm=>{
					this.setState(elm)
					this.props.selecAvatar(elm.text)}}
				/>
			</List>
		)
	}
}
export default AvatarSelector

