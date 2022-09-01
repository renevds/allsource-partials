import React from 'react';

//Style
import '@allsource/ui.style.base'
import './default_container.css'

export function DefaultContainer({ children, light }) {
  return (
    <div className={"defaultcontainer" + (light ? ' defaultcontainer__light' : '')}>
      {children}
    </div>
  );
}
