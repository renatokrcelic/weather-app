import React from 'react'

const CountrySelectOptionComponent = ({item, onClick}) => (
  <div
    id="value"
    onClick={(e) => onClick(item, e)}
  >
    { item.value }
  </div>
)

export default CountrySelectOptionComponent
