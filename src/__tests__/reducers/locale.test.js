import reducer, {initialState as expectedInitialState} from '../../reducers/locale'
import * as types from '../../actions/types'
import {
    setLocale
} from '../../actions/locale'

describe('locale reducer', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(expectedInitialState)
    })

    test(`should handle ${types.SETLOCALE}`, () => {
        const lang = 'en'
        const expectedAction = {
            lang
        }

        expect(
            reducer({}, setLocale(lang))
        ).toEqual(expectedAction)
    })
})