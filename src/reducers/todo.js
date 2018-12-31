import * as types from '../actions/types'

const initialState = {
    todos: [
        { id: 1, todo: 'todo1'},
        { id: 2, todo: 'todo2'}
      ]
}

export default function todo(state = initialState, action) {
    switch (action.type) {
        case types.ADDTODO:
        {
            const newTodos = [...state.todos, action.todo]
            return {
                ...state, //왜 state 반환??
                todos: newTodos
            }
        }
        case types.DELETETODO:
        {
            const newTodos = state.todos.filter(todo => {
                return action.id !== todo.id
            })

            return {
                ...state,
                todos: newTodos
            }
        }

        default:
            return state
    }
}
