import React from 'react';

//Style
import './secondary_button.css'
import '@allsource/main.ui.style.base'

export const SecondaryButton = ({children, onClick}) => {
  return (
    <button onClick={onClick} className="secondarybutton">{children}</button>
  )
};
