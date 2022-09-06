import React, {useEffect, useState} from 'react';

//Style
import '@allsource/ui.style.base'
import './navbar.css'

//Images
import BurgerIcon from './burger.svg'
import CrossIcon from './cross.svg'

//Component
import {Search} from "@allsource/ui.partials.navbar.search";
import {Button} from "@allsource/ui.partials.button";
import {Divider} from "@allsource/ui.partials.divider";
import {Loader} from "@allsource/ui.partials.loader";
import {UserIcons} from "@allsource/ui.partials.navbar.usericons";

export const Navbar = ({children, onSearch, loginUrlFetch, user, getUserData}) => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const loginUser = async () => {
    window.location.href = await loginUrlFetch();
  };

  useEffect(() => {
    getUserData();
  }, []);


  const isLoggedIn = user?.isLoggedIn;
  const searchButton = <Search initial="Search Projects" onSearch={onSearch}/>
  const connectWalletButton = <Button title="Connect Wallet" onClick={loginUser} className="secondarybutton"/>

  return (
    <div className="navbar__anchor">
      <div className="navbar__container">
        <img src='https://files.allsource.io/images/logo-white.svg' className="navbar__logo"/>
        {user ? <>
          <div className="navbar__children">
            {children}
          </div>
          <div className="navbar__mobile__hide">{searchButton}</div>
          <div className="navbar__mobile__hide">{isLoggedIn ?
            <UserIcons user={user} getUserData={getUserData}/> : connectWalletButton}</div>
          <div className="navbar__burger" onClick={() => setMobileOpen(!mobileOpen)}>
            <img src={mobileOpen ? CrossIcon : BurgerIcon}/>
          </div>
        </> : <Loader/>}
      </div>
      {mobileOpen && <div className="navbar__dropdown">
        {!isLoggedIn &&
          <>
            {connectWalletButton}
            <Divider className="divider__dark"/>
          </>
        }
        {children}
        {isLoggedIn &&
          <>
            <Divider className="divider__dark"/>
            <UserIcons user={user} getUserData={getUserData}/>
          </>}
      </div>}
    </div>
  )
}

export default Navbar;