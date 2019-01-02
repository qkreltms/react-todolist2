import todo from './todo'
import locale from './locale'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    todo,
    locale
})

export default reducers

