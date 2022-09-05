import React from "react";

//Style
import "./loader.css";

export const Loader = ({fullScreen = false, transparent = false}) => {
  return (
    <div style={fullScreen ? {
      backgroundColor: transparent ? "transparent" : "#322f36",
      position: "absolute",
      zIndex: 102,
    } : {}}
         id="preloader">
      <div id="loader"/>
    </div>
  );
};
