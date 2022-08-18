import React from 'react';

//Style
import '@main/ui.style.base';
import './navbarLink.css'

//Components
import {Link} from "react-router-dom";

export const NavbarLink = ({children, call, href, link}) => {
  if(link){
    return (
      <Link className="navbarlink__a" to={link}>{children}</Link>
    )
  }
  else{
    return (
      <a className="navbarlink__a" href={href} onClick={call}>{children}</a>
    )
  }

}

export default NavbarLink;