import * as actionTypes from '../actionTypes'

const initialState = {
  forecasts: [],
  cityData: {},
  error: '',
  loading: true
}

const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_SUCCESS:
      return {...state, forecasts: action.payload.forecasts, cityData: action.payload.city, error: ''}
    case actionTypes.FETCH_WEATHER_ERROR:
      return {...state, forecasts: [], cityData: {}, error: action.payload}
    case actionTypes.LOADING:
      return {...state, loading: action.payload}
    default:
      return state
  }
}

export default WeatherReducer
