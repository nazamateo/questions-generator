import React from "react";
import { List } from "semantic-ui-react";

const Questions = ({ questions }) => (
  <List>
    {questions.map((question) => {
      return <List.Item>{question}</List.Item>;
    })}
  </List>
);

export default Questions;
