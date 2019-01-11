import * as actions from '../../actions/randomDogs'
import * as types from '../../actions/types'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('randomDogs async action', () => {
    afterEach(() => {
        //각 테스트 끝나고 초기화
        fetchMock.restore()
    })

    //동작 성공 검토
    test('requestDogSuccess is should work', () => {
        //actions.fetchDog()가 아래 url로 접근해서 지정된 데이터 가져옴
        fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
            body: {
                "status": "success",
                "message": "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_3417.jpg"
            },
            headers: { 'content-type': 'application/json'}
        })

        const expectedAction = [
            { type: types.REQUESTED_DOG },
            { type: types.REQUESTED_DOG_SUCCEEDED, url: 'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_3417.jpg' }
        ]

        const store = mockStore({
            url: '',
            loading: false,
            error: false,
            errorMsg: ''
        })
        
        return store.dispatch(actions.fetchDog())
        .then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })

    //에러 발생 검토
    test('requestDogSuccess is should fail', () => {
        const fakeErrorMsg = 'fake error message'
        //actions.fetchDog()가 아래 url로 접근해서 지정된 에러 메세지 가져옴
        fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', () => { throw new Error(fakeErrorMsg)})

        const expectedAction = [
            { type: types.REQUESTED_DOG },
            { type: types.REQUESTED_DOG_FAILED, errorMsg: fakeErrorMsg }
        ]

        const store = mockStore({
            url: '',
            loading: false,
            error: false,
            errorMsg: ''
        })
        
        return store.dispatch(actions.fetchDog())
        .then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
})