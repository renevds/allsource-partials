import React from "react";

//Style
import "./loader.css";

export const Loader = ({fullScreen = false}) => {
  return (
    <div style={fullScreen ? {
      backgroundColor: "#322f36",
      position: "absolute",
      zIndex: 102,
    } : {}}
         id="preloader">
      <div id="loader"/>
    </div>
  );
};
