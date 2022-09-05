import React from 'react';

//Style
import './higher_lower.css'

export const HigherLowerNotColored = ({value, className}) => {
  if (value <= 0) {
    return (<img className={className} src="https://files.allsource.io/icons/arrow_down.svg" alt="arrow down"/>)
  } else {
    return (<img className={className} src="https://files.allsource.io/icons/arrow_up.svg" alt="arrow up"/>)
  }
}