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

export const fetchDog = () => {
    return function (dispatch) {
        dispatch(requestDog())

        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(
                data => dispatch(requestDogSuccess(data)),
                err => dispatch(requestDogFailed(err))
            )
    }
}