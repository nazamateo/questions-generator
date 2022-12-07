import React from "react";
export default function ErrorPage({ error }) {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Kindly reload the page.</i>
      </p>
    </div>
  );
}
