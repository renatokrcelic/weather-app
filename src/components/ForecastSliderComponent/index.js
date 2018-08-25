import React from 'react'
import styles from  './index.css'

const ForecastSliderComponent = ({value, onChange, onKeyPress, placeholder}) => (
  <div className={styles.forecastSlider}>
    <p>Select the amount of days you want to show</p>
    <input type="range" onChange={(e) => onChange(e, 'daysToShow')}
     min="1" max="5" value={value} step="1" />
     <div className={styles.sliderValueWrapper}>
       <p id="value" style={{marginLeft: `${(value-1)*20+value*3}%`}}>{value}</p>
     </div>
  </div>
);

export default ForecastSliderComponent
