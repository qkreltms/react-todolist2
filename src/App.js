import React, { Component } from 'react';
import './App.css';
import TodoList from './component/TodoList.jsx'

class App extends Component {

  render() {
    return (
      <div>
        <h1>MY TODOS</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
