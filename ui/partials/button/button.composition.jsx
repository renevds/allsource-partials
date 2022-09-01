import React from 'react';
import {Button} from './button';
import {DefaultContainer} from "@allsource/ui.composition.default_container";


export const ButtonSubscribe = () => (
  <DefaultContainer>
    <Button title="test" className="subscribe"/>
  </DefaultContainer>
);

export const ButtonPrimary= () => (
  <DefaultContainer light={true}>
    <Button title="test" className="primarybutton"/>
  </DefaultContainer>
);

export const ButtonSecondary = () => (
  <DefaultContainer light={true}>
    <Button title="test" className="secondarybutton"/>
  </DefaultContainer>
);
