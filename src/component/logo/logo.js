import React,{Component} from 'react'
import logoImg from './job.jpeg'
import './logo.css'
class Logo extends Component{
	render(){
		return (
			<div className="logo-container">
				<img className="logo" src={logoImg} alt=""/>
			</div>
		)
	}
}
export default Logo