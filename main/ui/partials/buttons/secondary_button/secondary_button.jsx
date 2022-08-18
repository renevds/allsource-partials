import React from 'react';

//Style
import '@allsource/ui.style.base'
import './secondary_button.css'

export const SecondaryButton = ({children, onClick}) => {
  return (
    <button onClick={onClick} className="secondarybutton">{children}</button>
  )
};
