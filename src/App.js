import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
import { connect } from 'react-redux'
import {addGUN,removeGUN,addGunAsync} from './index.redux'
class App extends Component {
  //store.dispatch的已经不需要了 addGUN等已经自动有dispatch功能了
  render() {
    const{num, addGUN, removeGUN, addGunAsync}=this.props;
    return (
      <div>
        <h1>number of guns:{num}</h1>
        <Button type="primary" onClick={addGUN}>申请武器</Button>
        <Button type="primary" onClick={removeGUN}>上交武器</Button>
        <Button type="primary" onClick={addGunAsync}>拖两天再给</Button>
      </div>
    );
  }
}
const mapStatetoProps=(state)=>{
  return { num:state }
}
const actionCreators = {addGUN,removeGUN,addGunAsync} 
App = connect(mapStatetoProps,actionCreators)(App)
//属性和方法分别给到组件App，这样react-redux会自动把这些参数放到App的props里面
export default App;
