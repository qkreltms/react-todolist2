import reducer, {
    initialState as expectedInitialState
} from '../../reducers/todo'
import * as types from '../../actions/types'
import {
    addTodo,
    deleteTodo
} from '../../actions/todo'

describe('todo reducer', () => {
    it('shold return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(expectedInitialState)
    })

    it(`should handle ${types.ADDTODO}`, () => {
        const newTodo = {
            id: 3,
            msg: 'Wake up early.'
        }
        const todos = [
            { id: 1, msg: 'todo1'},
            { id: 2, msg: 'todo2'},
            { id: 3, msg: 'Wake up early.'}
          ]
        const expectedAction = {
            todos
        }

        expect(reducer(undefined, addTodo(newTodo)))
        .toEqual(expectedAction)
    })

    it(`should handle ${types.DELETETODO}`, () => {
        const id = 1
        const todos = [{ id: 2, msg: 'todo2'}]
        const expectedAction = {
            todos
        }

        expect(reducer(undefined, deleteTodo(id)))
        .toEqual(expectedAction)
    })
})