import React from "react";
import Todo from "./Todo.jsx";
import AddTodo from "./AddTodo";
import PropTypes from 'prop-types'

import * as actions from '../actions/todo'
import { connect } from 'react-redux'

const TodoList = props => {
  const state = props;

  const todoList = state.todos.length ? (
    state.todos.map(todo => {
      return <Todo todo={todo} key={todo.id} deleteTodo={state.deleteTodo} />;
    })
  ) : (
    <h3> You have nothing to do. yay!</h3>
  );

  return (
    <div>
      {todoList} <AddTodo addTodo={state.addTodo}/>
    </div>
  );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    deleteTodo: PropTypes.func,
    addTodo: PropTypes.func
}

TodoList.defaultProps = {
  todos: [],
  deleteTodo: () => console.warn('deleteTodo is not defined'),
  addTodo: () => console.warn('addTodo is not defined')
}

const mapStateToProps = (state) => ({
  todos: state.todo.todos
})

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id))
  },
  addTodo: (todo) => {
    dispatch(actions.addTodo(todo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
