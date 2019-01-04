import React from "react";
import TodoItem from "./TodoItem.jsx";
import AddTodo from "./AddTodo";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";

import * as actions from "../actions/todo";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  addTodoSection: {
    padding: "30px"
  }
};

const TodoList = props => {
  const state = props;
  const { classes } = props;

  const todoList = state.todos.length ? (
    state.todos.map(todo => {
      return (
        <TodoItem todo={todo} key={todo.id} deleteTodo={state.deleteTodo} />
      );
    })
  ) : (
    <Grid item xs>
      <FormattedMessage id="nothing-todo" />
    </Grid>
  );

  return (
    <div>
      <section className={classes.addTodoSection}>
        <AddTodo addTodo={state.addTodo} />
      </section>
      <section>
        <Grid container spacing={16}>
          {todoList}
        </Grid>
      </section>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  deleteTodo: PropTypes.func,
  addTodo: PropTypes.func,
  classes: PropTypes.object.isRequired
};

TodoList.defaultProps = {
  todos: [],
  deleteTodo: () => console.warn("deleteTodo is not defined"),
  addTodo: () => console.warn("addTodo is not defined"),
  classes: () => console.warn("classes is not defined")
};

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => {
    dispatch(actions.deleteTodo(id));
  },
  addTodo: todo => {
    dispatch(actions.addTodo(todo));
  }
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
);
