import React from 'react';
import NavBar from '../../component/header/NavBar';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('NavBar', () => {
    test('renders without crashing', () => {
        const component = shallow(<NavBar />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
      })
})
