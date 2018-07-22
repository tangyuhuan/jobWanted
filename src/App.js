import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
import { connect } from 'react-redux'
import {addGUN,removeGUN,addGunAsync} from './index.redux'

@connect(
  //你要state什么属性放到props里
  state=>({num:state}),
  //你要state什么方法，放到props里，自动dispatch
  {addGUN,removeGUN,addGunAsync} 
)
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

export default App;
