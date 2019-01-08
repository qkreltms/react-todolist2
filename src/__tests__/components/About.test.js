import React from 'react';
import About from '../../component/About.jsx';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('About', () => {
    test('renders without crashing', () => {
        const component = shallow(<About />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
      })
})
