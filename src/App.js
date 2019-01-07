import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {

    todos:[
      {
    id: 1,
    title: 'take out the trash',
    completed:false
  },
  {
    id: 2,
    title: 'make dinner',
    completed:false
  },
  {
    id: 3,
    title: 'wash dishes',
    completed:false
  },
]
  }

  render() {
   
    return (
      <div className="App">
      {/* Creating a prop */}
       <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
