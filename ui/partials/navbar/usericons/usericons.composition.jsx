import React from 'react';
import {UserIcons} from "./usericons";
import {DefaultContainer} from "@allsource/ui.composition.default_container";

const testUser = {
  profile: {
    profilePicture: 'https://files.allsource.io/images/userThumbnail.png'
  },
  juiceData: {
    nextClaim : 0,
    juiceBalance: 69
  }
}

export const BasicUserIcons = () => (
  <DefaultContainer>
    <UserIcons user={testUser}/>
  </DefaultContainer>
);

