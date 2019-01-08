import React from 'react';
import AddTodo from '../../component/AddTodo';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('AboutTobo', () => {
    test('renders without crashing', () => {
        const component = shallow(<AddTodo />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
      })
})
