import React from 'react';

//Style
import '@allsource/ui.style.base'
import './navbar_icon.css'

//Components
import {Button} from '@allsource/ui.partials.button';

//Images
import SmallRight from './small_right.svg';
import SmallDown from './small_down.svg';

export const NavbarIcon = ({src, children, fullSize, onClick, imgHeight, title, arrow}) => {

  const arrowImg = (arrow === 'right' ? SmallRight : SmallDown);

  return (
    <div className="navbaricon__title__container" onClick={onClick}>
      <div className="navbaricon__container">
        <div className="navbaricon__img__bg">
          <img style={{height: imgHeight}} src={src}
               className={fullSize ? "navbaricon__img__full" : "navbaricon__img"}/>
        </div>
        <div className="navbaricon__text">
          {children}
        </div>
      </div>
      <div className="navbaricon__mobile__title">
        <Button className="button__dropdown" title={title}/>
      </div>
      <div className="navbaricon__arrow">
        {arrow && <img src={arrowImg}/>}
      </div>
    </div>
  )
}