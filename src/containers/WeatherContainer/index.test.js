import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {WeatherContainer} from './index'
import CountrySelectComponent from '../../components/CountrySelectComponent'

configure({adapter: new Adapter()})

describe('<WeatherContainer/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<WeatherContainer fetchWeather={() => {}} WeatherReducer={{cityData: {name: 'cityName'}, forecasts: [{dt_txt: '2018-08-25 03:00:00'}]}} />)
  })
  it('should render the country select component', () => {
    expect(wrapper.find(CountrySelectComponent)).toHaveLength(1)
  })

  it('should render error if present', () => {
    wrapper.setProps({WeatherReducer: {
      cityData: {name: 'cityName'},
      forecasts: [{dt_txt: '2018-08-25 03:00:00'}],
      error: 'Error message'
    }})
    expect(wrapper.find('#error').text()).toEqual('Error message')
  })

})
