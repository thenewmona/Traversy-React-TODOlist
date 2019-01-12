import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layouts/Header'
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios'



class App extends Component {
  state = {

    todos:[]
  }
componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
  .then(res => this.setState())
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
    return ( //creating routes
      <Router>
      <div className="App">
      <div className="container">
      <Header />   
     

      <Route exact path='/' render={props => (
        <React.Fragment>          
 <AddTodo addTodo={this.addTodo}/>
             <Todos todos={this.state.todos} markComplete=
       {this.markComplete} delTodo={this.delTodo}/>
        </React.Fragment>
      )} />

      <Route path='/about' component={About} />
     
      </div>
            </div>
            </Router>
    );
  }
}

export default App;
