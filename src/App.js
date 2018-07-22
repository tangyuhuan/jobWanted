import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const store  = this.props.store;
    const num = store.getState();
    const{addGUN,removeGUN,addGunAsync}=this.props;
    return (
      <div className="App">
        <h1>number of guns:{num}</h1>
        <Button type="primary" onClick={()=>store.dispatch(addGUN())}>申请武器</Button>
        <Button type="primary" onClick={()=>store.dispatch(removeGUN())}>上交武器</Button>
        <Button type="primary" onClick={()=>store.dispatch(addGunAsync())}>拖两天再给</Button>
      </div>
    );
  }
}

export default App;
