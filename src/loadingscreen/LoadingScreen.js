import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div className="loading-screen-wrapper">
      <ThreeDots
        height="200"
        width="200"
        radius="100"
        color="#FF7324"
        visible={true}
      />
    </div>
  );
}
