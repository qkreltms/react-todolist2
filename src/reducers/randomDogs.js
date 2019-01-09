import * as types from '../actions/types'

export const initialState = {
    url: '',
    loading: false,
    error: false,
    errorMsg: ''
}

export default function randomDogs(state = initialState, action) {
    switch (action.type) {
        case types.REQUESTED_DOG:
            return {
                url: '',
                loading: true,
                error: false
            }

        case types.REQUESTED_DOG_SUCCEEDED:
            return {
                url: action.url,
                loading: false,
                error: false
            }

        case types.REQUESTED_DOG_FAILED:
            return {
                url: '',
                loading: false,
                error: true,
                errorMsg: action.errorMsg
            }
        
        default: 
            return state
    }
}