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
//toggle complete 

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
   console.log(id); 
  }
  render() {
   
    return (
      <div className="App">
      {/* Creating a prop */}
       <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
