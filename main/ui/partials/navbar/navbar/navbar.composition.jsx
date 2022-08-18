import React from 'react';
import {Live} from "@main/ui.partials.navbar.live";
import {NavbarLink} from "@main/ui.partials.navbar.navbarlink";
import {PrimaryButton} from "@main/ui.partials.buttons.primary_button";
import {Search} from "@main/ui.partials.navbar.search";
import Navbar from "./navbar";


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
