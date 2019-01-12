import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import './components/layouts/Header'

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

//mark complete 
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
   console.log(id); 
  }


//Delete Todo
  delTodo = (id) => {
 this.setState({todos:[...this.state.todos.filter (todo => todo.id !== id)]});
  }

  
  render() {   
    return (
      <div className="App">
      <header />
      {/* Creating a prop */}
       <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
