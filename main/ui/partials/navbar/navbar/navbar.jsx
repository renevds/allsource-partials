import React from 'react';

//Style
import '@allsource/ui.style.base'
import './navbar.css'

export const Navbar = ({children}) => {1

  return (
    <div>
      <div className="navbar__container">
        <img src='https://files.allsource.io/images/logo-white.svg' className="navbar__logo"/>
        {children}
      </div>
    </div>
  )
}

export default Navbar;