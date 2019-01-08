import * as types from './types'

//어떤 액션이있고 데이터 형식이 이렇다 => model
export const addTodo = (todo) => {
    return {
        type: types.ADDTODO,
        todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: types.DELETETODO,
        id
    }
}