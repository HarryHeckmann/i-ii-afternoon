import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import New from './Components/New'

class App extends Component {
  constructor(){
    super()
    this.state = {
      
      
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Main isNew={this.state.isNew}/>
</div>
    );
  }
  

}

export default App;
