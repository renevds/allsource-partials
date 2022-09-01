import React from 'react';
import Navbar from "./navbar";
import {NavbarLink} from "@allsource/ui.partials.navbar.navbarlink";
import {Live} from "@allsource/ui.partials.navbar.live";
import {UserProvider} from "@allsource/context.user";

export const BasicNavbar = () => (
  <UserProvider>
    <div style={{width: "750px"}}>
      <Navbar>
        <NavbarLink href='https://google.com'>Test</NavbarLink>
        <Live/>
        <NavbarLink href='https://google.com'>Test</NavbarLink>
      </Navbar>
    </div>
  </UserProvider>
);
