import React, { useState, useEffect } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="app-wrapper">
      <div className="app-header">
        <h2 className="header">Quiz Master</h2>
      </div>

      <div className="app-body">
        <div>
          <Form>
            <Form.Field
              control={TextArea}
              placeholder="Type lesson to generate questions from.."
              onChange={(e) => setInputText(e.target.value)}
            />

            <select className="questions-count-select">
              <option>Please select how many questions you want.</option>
            </select>

            <Form.Field control={TextArea} placeholder="Your Questions..." />

            <Button color="orange" size="large">
              <i class="paper plane outline icon"></i>
              Generate
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
