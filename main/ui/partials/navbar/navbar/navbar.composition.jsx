import React from 'react';
import Navbar from "./navbar";
import {NavbarLink} from "@allsource/ui.partials.navbar.navbarlink";
import {Live} from "@allsource/ui.partials.navbar.live";
import {Search} from "@allsource/ui.partials.navbar.search";
import {PrimaryButton} from "@allsource/ui.partials.buttons.primary_button";


export const BasicNavbar = () => (
  <div style={{width: "750px"}}>
    <Navbar>
      <NavbarLink href='https://google.com'>Test</NavbarLink>
      <Live/>
      <NavbarLink href='https://google.com'>Test</NavbarLink>
      <Search initial="Search Projects" onSearch={results => console.log(results)}/>
      <PrimaryButton href='https://google.com'>test</PrimaryButton>
    </Navbar>
  </div>
);
