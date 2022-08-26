import React from 'react';

//Style
import '@allsource/ui.style.base';
import "./divider.css";

export const Divider = ({ margin, className }) => {
  return (
    <div
      style={
        margin ? { marginTop: margin, marginBottom: margin } : { margin: 0 }
      }
      className={"divider " + className}
    ></div>
  );
};