import * as types from '../../actions/types'
import reducer, {initialState as expectedInitialState} from '../../reducers/randomDogs'
import * as actions from '../../actions/randomDogs'

describe('reandomDogs reducer', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {}))
        .toEqual(expectedInitialState)
    })

    test(`should return ${types.REQUESTED_DOG}`, () => {
        const expectedAction = {
            url: '',
            loading: true,
            error: false
        }

        expect(reducer(undefined, actions.requestDog()))
        .toEqual(expectedAction)
    })

    test(`should return ${types.REQUESTED_DOG_SUCCEEDED}`, () => {
        const data = {
            message: 'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_3417.jpg'
        }
        const expectedAction = {
            url: data.message,
            loading: false,
            error: false
        }

        expect(reducer(undefined, actions.requestDogSuccess(data)))
        .toEqual(expectedAction)
    })

    test(`should return ${types.REQUESTED_DOG_FAILED}`, () => {
        const fakeErrorMsg = 'fake error message'
        const expectedAction = {
            url: '',
            loading: false,
            error: true,
            errorMsg: fakeErrorMsg
        }
        const err = {
            message: fakeErrorMsg
        }

        expect(reducer(undefined, actions.requestDogFailed(err)))
        .toEqual(expectedAction)
    })
})