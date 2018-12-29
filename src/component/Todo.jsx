import React from "react";
import PropTypes from 'prop-types'

const Todo = ({ todo, deleteTodo }) => {
    //onClick을 arrow function onClick시 this가 해당 태그가 됨 그러므로 arrow를 써서 상위 영역을 가리키게함
    return <div className="todo" onClick={() => {deleteTodo(todo.id)}}>{todo.todo}</div>;
};

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        todo: PropTypes.string
    })
}

export default Todo;
