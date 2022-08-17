import React from 'react';

//Style
import './primary_button.css'

export const PrimaryButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="primarybutton">{text}</button>
  )
};
