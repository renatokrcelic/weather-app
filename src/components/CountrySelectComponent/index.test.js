import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {CountrySelectComponent} from './index'

configure({adapter: new Adapter()})

describe('<CountrySelectComponent/>', () => {
  it('should handle selected item if it is given through props', () => {
    const wrapper = mount(<CountrySelectComponent selected={{value: 'China', code: 'CN'}}/>)
    expect(wrapper.find('#selectedItem').text()).toEqual('China')
  })

  it('should render placeholder if no selected prop is present', () => {
    const wrapper = mount(<CountrySelectComponent />)
    expect(wrapper.find('#placeholder').text()).toEqual('Select country')
  })
})
