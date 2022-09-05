import React from 'react';
import {DefaultContainer} from "@allsource/ui.composition.default_container";
import {Loader} from "./loader";


export const BasicLoader = () => (
  <DefaultContainer>
    <Loader/>
  </DefaultContainer>
);

export const TransparentLoader = () => (
  <DefaultContainer light>
    <Loader transparent/>
  </DefaultContainer>
);
