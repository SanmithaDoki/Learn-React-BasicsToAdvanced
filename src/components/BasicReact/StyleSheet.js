import React from "react";
import "./myStyles.css";

//1st method of styling react components
function StyleSheet(props) {
  const primary = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${primary} font-xl`}>CSS Stylesheets Method</h1>
    </div>
  );
}

export default StyleSheet;
