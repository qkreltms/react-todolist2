import * as actions from '../../actions/todo'
import * as types from '../../actions/types'

describe('todo Action', () => {
    it('should create an action to add a todo', () => {
        const newTodo = {
            id: 1,
            msg: 'Wake up early.'
        }

        const expectedAction = {
            type: types.ADDTODO,
            todo: newTodo
        }
        expect(actions.addTodo(newTodo)).toEqual(expectedAction)
    })

    it('should create an action to delete a todo', () => {
        const id = 1

        const expectedAction = {
            type: types.DELETETODO,
            id
        }
        expect(actions.deleteTodo(id)).toEqual(expectedAction)
    })
})