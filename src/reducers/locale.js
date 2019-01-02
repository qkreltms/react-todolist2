import * as types from '../actions/types'

const initialState = {
    lang: ''
}

export default function locale(state = initialState, action) {
    switch (action.type) {
        case types.SETLOCALE: {
            return {
                lang: action.lang
            }
        }

        default: 
            return state
    }
}