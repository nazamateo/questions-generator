import React from "react";
import "./Header.css";

export default function Header({ user }) {
  return (
    <div className="page-header">
      <h1>
        Hi {user}! I am your <i>Quiz Master Bot</i>
      </h1>
      <p className="tagline">
        I help teachers save time constructing quiz questions. I<br></br>
        <i>magically</i> construct questions based on any topic. <br></br>Just
        paste your lesson gist down below
        <i class="hand point down outline icon"></i>
      </p>
    </div>
  );
}
