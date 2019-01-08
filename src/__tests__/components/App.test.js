import React from 'react';
import App from '../../App';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('App', () => {
  test('renders without crashing', () => {
    const component = shallow(<App />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
