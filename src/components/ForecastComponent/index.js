import React from 'react'
import moment from 'moment'
import styles from  './index.css'
const ForecastComponent = ({forecast}) => (
  <div className={styles.forecastWrapper}>
    <p className={styles.day}>{moment(forecast.dt_txt).format("ddd")}</p>
    <img src={forecast.icon} alt="weather icon" className={styles.icon}/>
    <div className={styles.tempContainer}>
      <p id="maxTemp" className={styles.tempDay}>{forecast.max_temp}</p>
      <span className={styles.degreeDay}>C</span>
    </div>
    <div className={styles.tempContainer}>
      <p id="minTemp" className={styles.tempNight}>{forecast.min_temp}</p>
      <span className={styles.degreeNight}>C</span>
    </div>
  </div>
)

export default ForecastComponent
