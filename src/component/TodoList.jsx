import React from "react";
import Todo from "./Todo.jsx";
import AddTodo from "./AddTodo";

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

export default TodoList;
