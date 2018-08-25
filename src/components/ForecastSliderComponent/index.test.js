import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ForecastSliderComponent from './index.js'

configure({adapter: new Adapter()})

describe('<ForecastSliderComponent />', () => {
  const wrapper = mount(<ForecastSliderComponent value={3} />)
  it('should handle value prop', () => {
    expect(wrapper.find('#value').text()).toEqual('3')
  })
})
