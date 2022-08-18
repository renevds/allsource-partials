import React from 'react';

//Style
import '@main/ui.style.base'
import './default_container.css'

export function DefaultContainer({ children }) {
  return (
    <div className='defaultcontainer'>
      {children}
    </div>
  );
}
