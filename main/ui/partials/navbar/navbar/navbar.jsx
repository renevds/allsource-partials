import React, {useState} from 'react';

//Style
import '@allsource/ui.style.base'
import './navbar.css'

//Images
import BurgerIcon from './burger.svg'
import CrossIcon from './cross.svg'
import {Search} from "@allsource/ui.partials.navbar.search";


export const Navbar = ({children, onSearch, onLogin}) => {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar__anchor">
      <div className="navbar__container">
        <img src='https://files.allsource.io/images/logo-white.svg' className="navbar__logo"/>
        <div className="navbar__children">
          {children}
          <Search initial="Search Projects" onSearch={onSearch}/>
        </div>
        <div className="navbar__burger" onClick={() => setOpen(!open)}>
          <img src={open ? CrossIcon : BurgerIcon}/>
        </div>
      </div>
      {open && <div className="navbar__dropdown">
        {children}
        <Search initial="Search Projects" onSearch={onSearch}/>
      </div>}
    </div>
  )
}

export default Navbar;