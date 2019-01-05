import * as types from './types'

export const requestDog = () => {
    return {
        type: types.REQUESTED_DOG
    }
}

export const requestDogSuccess = (data) => {
    return {
        type: types.REQUESTED_DOG_SUCCEEDED,
        url: data.message
    }
}

export const requestDogFailed = (err) => {
    return {
        type: types.REQUESTED_DOG_FAILED,
        errorMsg: err.message
    }
}