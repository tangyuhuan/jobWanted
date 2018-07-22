import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
import {addGUN,removeGUN} from './index.redux'
class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const store  = this.props.store;
    const num = store.getState()
    return (
      <div className="App">
        <h1>number of guns:{num}</h1>
         <Button type="primary" onClick={()=>store.dispatch(addGUN())}>申请武器</Button>
         <Button type="primary" onClick={()=>store.dispatch(removeGUN())}>减少武器</Button>
      </div>
    );
  }
}

export default App;
