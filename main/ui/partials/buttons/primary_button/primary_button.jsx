import React from 'react';

//Style
import '@allsource/ui.style.base'
import './primary_button.css'

export const PrimaryButton = ({children, onClick}) => {
  return (
    <button onClick={onClick} className="primarybutton">{children}</button>
  )
};
