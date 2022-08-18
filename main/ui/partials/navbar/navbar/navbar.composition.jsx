import React from 'react';
import Navbar from "./navbar";
import {NavbarLink} from "../navbarlink";
import {Live} from "../live";
import {Search} from "../search";
import {PrimaryButton} from "../../buttons/primary_button";


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
