import React from "react";

import "./QuestionsContainer.css";
export default function QuestionsContainer({ questions }) {
  return (
    <div className="questions-container">
      <div className="question-box">{questions}</div>
    </div>
  );
}
