import React from "react";
import Todo from "./Todo.jsx";
import AddTodo from "./AddTodo";
import PropTypes from 'prop-types'

const TodoList = props => {
  const state = props;

  const todoList = state.todos.length ? (
    state.todos.map(todo => {
      return <Todo deleteTodo={props.deleteTodo} todo={todo} key={todo.id} />;
    })
  ) : (
    <h3> You have nothing to do. yay!</h3>
  );

  return (
    <div>
      {todoList} <AddTodo addTodo={props.addTodo} />
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

export default TodoList;
