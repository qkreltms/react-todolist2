import {
    addTodo as action
} from '../../actions/todo'
import rootReducer from '../../reducers'
import {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

describe('rootReducer', () => {
    test('should handle ', () => {
        const store = createStore(rootReducer, applyMiddleware(thunk))
        const newTodo = {
            id: 1,
            msg: 'Wake up early.'
        }

        const expectedAction = {
            "todos": [{
                "id": 1,
                "msg": "todo1"
            }, {
                "id": 2,
                "msg": "todo2"
            }, {
                "id": 1,
                "msg": "Wake up early."
            }]
        }
        store.dispatch(action(newTodo))

        const actual = store.getState()
        expect(actual.todo).toEqual(expectedAction)
    })
})