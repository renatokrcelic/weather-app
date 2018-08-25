import reducer from './WeatherReducer'
import * as actionTypes from '../actionTypes'

describe('WeatherReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      forecasts: [],
      cityData: {},
      error: '',
      loading: true
    })
  })

  it('should save the city data on page load', () => {
    expect(reducer({
      forecasts: [],
      cityData: {},
      error: '',
      loading: true
    }, {
      type: actionTypes.FETCH_WEATHER_SUCCESS,
      payload: {
        forecasts: [],
        city: {prop: 'cityData'}
      }
    })).toEqual({
      forecasts: [],
      cityData: {prop: 'cityData'},
      error: '',
      loading: true
    })
  })

  it('should save the forecast data on page load', () => {
    expect(reducer({
      forecasts: [],
      cityData: {},
      error: '',
      loading: true
    }, {
      type: actionTypes.FETCH_WEATHER_SUCCESS,
      payload: {
        forecasts: [1,2,3],
        city: {}
      }
    })).toEqual({
      forecasts: [1,2,3],
      cityData: {},
      error: '',
      loading: true
    })
  })

  it('should save error if fetch is not successful', () => {
    expect(reducer({
      forecasts: [],
      cityData: {},
      error: '',
      loading: true
    }, {
      type: actionTypes.FETCH_WEATHER_ERROR,
      payload: 'Error text'
    })).toEqual({
      forecasts: [],
      cityData: {},
      error: 'Error text',
      loading: true
    })
  })

  it('should stop loading if loading with payload:flase is dispatched', () => {
    expect(reducer({
      forecasts: [],
      cityData: {},
      error: '',
      loading: true
    }, {
      type: actionTypes.LOADING,
      payload: false
    })).toEqual({
      forecasts: [],
      cityData: {},
      error: '',
      loading: false
    })
  })
})
