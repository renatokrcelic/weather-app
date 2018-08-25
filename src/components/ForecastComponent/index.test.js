import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ForecastComponent from './index.js'

configure({adapter: new Adapter()})

describe('<ForecastComponent />', () => {
  const wrapper = mount(<ForecastComponent forecast={{dt_txt: '2018-08-25 03:00:00', max_temp: 20, min_temp: 10}} />)
  it('should pick up the max_temp prop', () => {
    expect(wrapper.find('#maxTemp').text()).toEqual('20')
  })
  it('should pick up the min_temp prop', () => {
    expect(wrapper.find('#minTemp').text()).toEqual('10')
  })
})
