//Style
import './NavbarLink.css'
import {Link} from "react-router-dom";

const NavbarLink = ({children, call, href, link}) => {
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