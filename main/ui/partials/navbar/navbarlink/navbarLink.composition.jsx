import React from 'react';
import NavbarLink from "./navbarLink";
import {DefaultContainer} from "@allsource/ui.composition.default_container";





export const BasicNavbarLink = () => (
  <DefaultContainer>
    <NavbarLink onClick={() => console.log("test")}>Test</NavbarLink>
  </DefaultContainer>
);

