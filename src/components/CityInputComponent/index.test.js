import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CityInputComponent from './index.js'

configure({adapter: new Adapter()})

describe('<CityInputComponent />', () => {
  it('should pick up the value prop', () => {
    const wrapper = mount(<CityInputComponent />)
    wrapper.setProps({value: 'City'})
    expect(wrapper.find('#cityInput').props().value).toEqual('City')
  })
})
