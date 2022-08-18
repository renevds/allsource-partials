import React from 'react';

//Style
import './primary_button.css'
import '../../../style/base'

export const PrimaryButton = ({children, onClick}) => {
  return (
    <button onClick={onClick} className="primarybutton">{children}</button>
  )
};
