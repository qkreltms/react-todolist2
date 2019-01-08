import React from 'react';
import RandomPicture from '../../component/RandomPicture';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('RandomPicture', () => {
    test('renders without crashing', () => {
        const component = shallow(<RandomPicture />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
      })
})
