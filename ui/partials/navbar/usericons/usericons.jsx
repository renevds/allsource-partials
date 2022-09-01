import React from 'react';

//style
import './usericons.css'
import {NavbarIcon} from "@allsource/ui.partials.navbar.navbar_icon";

//Components
import {TextLoader} from "@allsource/ui.partials.text_loader";
import {Button} from "@allsource/ui.partials.button";
import {Divider} from "@allsource/ui.partials.divider";

//Utils
import {claimJuice} from "@allsource/utils.juice_utils";
import {redirectToJuice, redirectToProfile} from "@allsource/utils.node_redirect_utils";
import {Duration} from "luxon";

//Hooks
import {useEffect, useState} from "react";

//Images
import ChestOpen from './chest_open.svg'
import LogoutIcon from './logout.svg';
import ProfileIcon from './profile.svg';
import InviteIcon from './invite.svg';


//Axios
import {mainFetch} from "@allsource/config.axios_instances";

export const UserIcons = ({user, getUserData}) => {

  const [profileDropped, setProfileDropped] = useState(false);

  const userText = user ? user.juiceData.juiceBalance : <TextLoader/>

  const getDate = () => {
    const diff = user.juiceData.nextClaim - Date.now();
    if (diff <= 0) {
      setChest("https://files.allsource.io/icons/chest.svg")
      return "Claim"
    } else {
      setChest(ChestOpen)
      return Duration.fromMillis(diff).toFormat('hh:mm:ss');
    }

  }

  const [juiceTime, setJuiceTime] = useState(ChestOpen);
  const [chest, setChest] = useState();

  useEffect(() => {
    if (user) {
      setJuiceTime(getDate());
      setInterval(() => {
        setJuiceTime(getDate())
      }, 1000);
    }
  }, []);

  const chestText = user ? juiceTime : <TextLoader/>

  return (
    <div className="usericons__container">
      <NavbarIcon src="https://files.allsource.io/images/juice-flask.png"
                  onClick={() => redirectToJuice()}
                  imgHeight="70%"
                  title="Juice Shop">
        {userText}
      </NavbarIcon>
      <NavbarIcon src={chest}
                  onClick={async () => {
                    claimJuice();
                    getUserData(); //todo this might fire to soon
                  }}
                  imgHeight="87%"
                  title="Daily Chest">
        {chestText}
      </NavbarIcon>
      <NavbarIcon src={user.profile.profilePicture} fullSize
                  onClick={() => setProfileDropped(!profileDropped)}
                  title={user.profile.username}
                  arrow={profileDropped ? "down" : "right"}/>
      {profileDropped && <div className="usericons__dropdown">
        <Button className="button__dropdown" imgClassName="button__dropdown__icon" title="My Profile"
                src={ProfileIcon} onClick={() => redirectToProfile()}/>
        <Button className="button__dropdown" imgClassName="button__dropdown__icon" title="Invite Friends"
                src={InviteIcon} onClick={() => redirectToJuice('/referrals')}/>
        <Divider className="divider__dark"/>
        <Button className="button__dropdown" imgClassName="button__dropdown__icon" title="Log Out" src={LogoutIcon}
                onClick={async () => {
                  mainFetch('/logout');
                  window.location.href = '/'; //todo this might fire to soon
                }}/>
      </div>}
    </div>
  )
}