import React from 'react';
import App from '../../App';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import TodoList from '../../component/TodoList'
import About from '../../component/About' 

describe('App', () => {
  test('renders without crashing', () => {
    const component = shallow(<App />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  
//   test('Should render the Home component when visiting / ', () => {
//     const component = mount(
//         <MemoryRouter initialEntries={['/']}>
//             <App />
//         </MemoryRouter>
//     )
//     expect(component.find(TodoList).length).toBe(1)
// })
})
