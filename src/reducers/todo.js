import * as types from '../actions/types'

//액션이 발생하면 데이터가 이렇게 변할 것이다.

export const initialState = {
    todos: [
        { id: 1, msg: 'todo1'},
        { id: 2, msg: 'todo2'}
      ]
}

export default function todo(state = initialState, action) {
    switch (action.type) {
        case types.ADDTODO:
        {
            const newTodos = [...state.todos, action.todo]
            return {
                todos: newTodos
            }
        }
        case types.DELETETODO:
        {
            const newTodos = state.todos.filter(todo => {
                return action.id !== todo.id
            })

            return {
                todos: newTodos
            }
        }

        default:
            return state
    }
}
