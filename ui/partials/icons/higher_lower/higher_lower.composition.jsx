import React from 'react';

import {HigherLower} from "./higher_lower";
import {HigherLowerNotColored} from './higher_lower_not_colored';
import {DefaultContainer} from "@allsource/ui.composition.default_container";


export const BasicHigherLower = () => (
  <DefaultContainer>
    <HigherLower value={-50}/>
    <HigherLower value={50}/>
  </DefaultContainer>
);

export const BasicHigherLowerNotColored = () => (
  <DefaultContainer>
    <HigherLowerNotColored value={-50}/>
    <HigherLowerNotColored value={50}/>
  </DefaultContainer>
);