import * as types from '../../actions/types'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import rootReducer, {reducers} from '../../reducers'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('rootReducer', () => {
    it('rootReducer is should work', () => {
        const store = mockStore(reducers)

        expect(rootReducer).toEqual(reducers)
    })
})