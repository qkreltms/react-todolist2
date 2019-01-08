import {setLocale} from '../../actions/locale'
import * as types from '../../actions/types'

describe('locale Action', () => {
    it('should create an action to set a locale', () => {
        const lang = 'en'
        const expectedAction = {
            type: types.SETLOCALE,
            lang
        }
        expect(setLocale(lang)).toEqual(expectedAction)
    })
})