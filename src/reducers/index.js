import todo from './todo'
import locale from './locale'
import randomDogs from './randomDogs'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    todo,
    locale,
    randomDogs
})

export default reducers

