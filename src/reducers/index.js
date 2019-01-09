import todo from './todo'
import locale from './locale'
import randomDogs from './randomDogs'
import { combineReducers } from 'redux'

export const reducers = {
    todo,
    locale,
    randomDogs
}

const rootReducer = combineReducers(reducers)

export default rootReducer

