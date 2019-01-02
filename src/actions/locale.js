import * as types from './types'

export const setLocale = (lang) => {
    return {
        type: types.SETLOCALE,
        lang
    }
}