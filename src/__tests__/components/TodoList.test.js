import React from 'react';
import TodoList from '../../component/TodoList';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('TodoList', () => {
    test('renders without crashing', () => {
        const component = shallow(<TodoList />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
      })
})
