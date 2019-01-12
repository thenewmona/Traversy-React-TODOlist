import React, { Component } from 'react';
import Header from './components/layouts/Header'
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import uuid from 'uuid';


class App extends Component {
  state = {

    todos:[
      {
    id: uuid.v4(),
    title: 'take out the trash',
    completed:false
  },
  {
    id: uuid.v4(),
    title: 'make dinner',
    completed:false
  },
  {
    id:uuid.v4(),
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

 //add Todo
 addTodo = (title) => {
   const newTodo = {
     id: uuid.v4(),
     title: title,
     completed: false
   }
   this.setState({todos:[...this.state.todos, newTodo]});
 }//need to add this to state

  render() {   
    return (
      <div className="App">
      <div className="container">
      <Header />   
      <AddTodo addTodo={this.addTodo}/>

       <Todos todos={this.state.todos} markComplete=
       {this.markComplete} delTodo={this.delTodo}/>
      </div>
            </div>
    );
  }
}

export default App;
