import React from 'react';

import {HigherLower} from "./higher_lower";
import {DefaultContainer} from "@allsource/ui.composition.default_container";


export const BasicHigherLower = () => (
  <DefaultContainer>
    <HigherLower value={-50}/>
    <HigherLower value={50}/>
  </DefaultContainer>
);
