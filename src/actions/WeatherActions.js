import config from '../config'
import * as actionTypes from '../actionTypes'
import {request} from '../utility/Request'
import moment from 'moment'

import d01 from '../assets/01d.svg'
import d02 from '../assets/02d.svg'
import d03 from '../assets/03d.svg'
import d04 from '../assets/04d.svg'
import d09 from '../assets/09d.svg'
import d10 from '../assets/10d.svg'
import d11 from '../assets/11d.svg'
import d13 from '../assets/13d.svg'
import d50 from '../assets/50d.svg'

export const fetchWeather = (city, country) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.LOADING, payload: true })
      const resp = await request(`${config.WEATHER_API_URL}&q=${city},${country}`)

      const forecasts = processResult(resp)

      const payload = {
        city: resp.data.city,
        forecasts
      }

      dispatch({ type: actionTypes.FETCH_WEATHER_SUCCESS, payload })
      return dispatch({ type: actionTypes.LOADING, payload: false })
    } catch (e) {
      let text;
      switch (e.response.data.cod) {
        case '404':
          text = "We can't find this city in the selected country."
          break;
        case '403':
          text = 'Permission error. Please contact the developer.'
          break;
        default:
        text = 'Error while loading weather data.'
        break;
      }
      dispatch({ type: actionTypes.FETCH_WEATHER_ERROR, payload: text })
      return dispatch({ type: actionTypes.LOADING, payload: false })
    }
  }
}

const processResult = (resp) => {
  const forecasts = []
  let currentDayMaxTemps = []
  let currentDayMinTemps = []
  resp.data.list.map((item) => {
    const hr = moment(item.dt_txt).format('HH')
    currentDayMaxTemps.push(item.main.temp_max)
    currentDayMinTemps.push(item.main.temp_min)
    if (hr === '21') {
      switch (item.weather[0].icon) {
        case '01n':
          item.icon = d01
          break;
        case '02n':
          item.icon = d02
          break;
        case '03n':
          item.icon = d03
          break;
        case '04n':
          item.icon = d04
          break;
        case '09n':
          item.icon = d09
          break;
        case '10n':
          item.icon = d10
          break;
        case '11n':
          item.icon = d11
          break;
        case '13n':
          item.icon = d13
          break;
        case '50n':
          item.icon = d50
          break;
        default:
        item.icon = d01
        break;
      }
      item.max_temp = Math.round(Math.max(...currentDayMaxTemps))
      item.min_temp = Math.round(Math.min(...currentDayMinTemps))
      forecasts.push(item)
      currentDayMaxTemps=[]
      currentDayMinTemps=[]
    }
    return item
  })
  return forecasts
}
