import React from 'react';
import {DefaultContainer} from "@allsource/ui.composition.default_container";
import {BrowserRouter} from "react-router-dom";
import Footer from "./footer";


export const SimpleDivider = () => (
  <BrowserRouter>
    <DefaultContainer>
      <Footer/>
    </DefaultContainer>
  </BrowserRouter>
);
