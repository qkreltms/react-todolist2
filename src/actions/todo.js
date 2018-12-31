import * as types from './types'

export const addTodo = (todo) => {
    console.log(todo)
    return {
        type: types.ADDTODO,
        todo: {
            id: Math.random(),
            todo
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: types.DELETETODO,
        id
    }
}