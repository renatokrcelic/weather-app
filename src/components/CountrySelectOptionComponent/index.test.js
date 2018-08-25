import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CountrySelectOptionComponent from './index.js'

configure({adapter: new Adapter()})

describe('<CountrySelectOptionComponent />', () => {
  const wrapper = mount(<CountrySelectOptionComponent item={{value: 'China', code: 'CN'}} />)
  it('should pick up the value prop', () => {
    expect(wrapper.find('#value').text()).toEqual('China')
  })
})
