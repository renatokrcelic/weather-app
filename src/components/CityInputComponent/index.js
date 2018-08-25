import React from 'react'
import styles from  './index.css'
import img from './assets/search.png'
const CityInputComponent = ({value, onChange, onKeyPress, placeholder}) => (
  <div id="inputWrapper" className={styles.inputWrapper}>
    <input id="cityInput" placeholder={placeholder || 'Select city'} className={styles.cityInput} type="text" value={value || ''} onChange={(e) => onChange(e, 'city')} onKeyPress={onKeyPress} />
    <img src={img} width='30' alt='magnifying glass' />
  </div>
);

export default CityInputComponent
