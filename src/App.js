import React, { Component } from 'react';
import './App.css';
import TodoList from './component/TodoList.jsx'

class App extends Component {

  state = {
    todos: [
      { id: 1, todo: 'todo1'},
      { id: 2, todo: 'todo2'}
    ]
  }

  addTodo = (todo) => {
    let temp = {
      todo,
      id: Math.random()
    } 

    const todos = [...this.state.todos, temp]
    
    this.setState({
      todos
    })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  } 

  render() {
    return (
      <div>
        <h1>MY TODOS</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
