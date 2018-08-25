import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import {
  fetchWeather
} from '../../actions'
import styles from './index.css'
import Loader from 'react-loader-spinner'
import moment from 'moment'
import CountrySelectComponent from '../../components/CountrySelectComponent'
import CityInputComponent from '../../components/CityInputComponent'
import ForecastSliderComponent from '../../components/ForecastSliderComponent'
import ForecastComponent from '../../components/ForecastComponent'
import HOC from '../../components/HOC'
import bg from './assets/Zurich.jpg'

export class WeatherContainer extends Component {
  state = {
    country: '',
    city: '',
    daysToShow: 3,
  }

  componentDidMount() {
    const {fetchWeather} = this.props
    fetchWeather('Zürich', 'CH')
  }

  _handleChange = (e, type) => {
    return this.setState({[type]: e.target.value})
  }
  _handleSelect = (country) => {
    return this.setState({city: '', country})
  }
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const {fetchWeather} = this.props
      const {city, country} = this.state
      return fetchWeather(city, country.code)
    }
    return
  }

  _renderForecasts = () => {
    const {WeatherReducer: {forecasts}} = this.props
    const {daysToShow} = this.state
    return forecasts.map((forecast, i) => {
      if (daysToShow < i+1) {
        return null
      }
      return <ForecastComponent key={i} forecast={forecast} />
    })
  }

  render () {
    const {city, daysToShow, country} = this.state
    const {WeatherReducer: {forecasts, cityData, loading, error}} = this.props
    if (loading) {
      return (
        <div className={styles.loaderContainer}>
          <Loader
      	     type="Puff"
      	     color="#00BFFF"
      	     height="100"
      	     width="100"
      	  />
        </div>
      )
    }
    return(
      <HOC>
        <div className={styles.heroSection} style={{
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${bg})`,
        }}>
          <div className={styles.inputContainer}>
            <CountrySelectComponent
              selected={country}
              onSelect={this._handleSelect}
              placeholder="Select country"
              items={[
                { value: 'China', code: 'CN' },
                { value: 'France', code: 'FR' },
                { value: 'Lithuania', code: 'LI' },
                { value: 'Switzerland', code: 'CH' },
              ]}
            />
            <CityInputComponent
              value={city}
              onChange={this._handleChange}
              onKeyPress={this._handleKeyPress}
             />
            {error && <p id="error" className={styles.error}>{error}</p>}
            {!error && <div className={styles.cityDataWrapper}>
              <p className={styles.date}>{moment(forecasts[0].dt_txt).format("dddd DD MMM")}</p>
              <p className={styles.city}>{cityData.name}</p>
            </div>}
          </div>
          {!error && <div className={styles.weatherContainer}>
            <img src={forecasts[0].icon} alt="weather icon" className={styles.icon}/>
            <span className={styles.temp}>{forecasts[0].max_temp}</span>
            <span className={styles.degree}>C</span>
          </div>}
        </div>
        {!error && <div className={styles.forecastSection}>
          <ForecastSliderComponent
            onChange={this._handleChange}
            value={daysToShow}
          />
          <div className={styles.forecasts}>
            {this._renderForecasts()}
          </div>
        </div>}
      </HOC>
    )
  }
}

const ms = ({WeatherReducer}) => {
  return {
    WeatherReducer
  }
}

const md = (dispatch) => {
  return {
    fetchWeather: bindActionCreators(fetchWeather, dispatch),
  }
}

export default connect(ms, md)(WeatherContainer)
