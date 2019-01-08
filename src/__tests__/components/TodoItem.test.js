import React from 'react';
import TodoItem from '../../component/TodoItem';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('TodoItem', () => {
    test('renders without crashing', () => {
        const component = shallow(<TodoItem />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
      })
})
