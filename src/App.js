import React, { useState, useEffect } from "react";
import { Form, TextArea, Button, Radio } from "semantic-ui-react";
import { getResponse } from "./api/API";
import Questions from "./Questions";
import LoadingScreen from "./loadingscreen/LoadingScreen";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [questionsCount, setQuestionsCount] = useState(1);
  const [questions, setQuestions] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    getResponse(questionsCount, inputText, setQuestionsCount, setIsLoading);
  };

  const handleChange = (e, { value }) => {
    setQuestionsCount(value);
  };

  isLoading && <LoadingScreen />;
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

            <Form.Field>
              <Radio
                label="1"
                name="radioGroup"
                value={1}
                checked={questionsCount === 1}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="2"
                name="radioGroup"
                value={2}
                checked={questionsCount === 2}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field>
              <Radio
                label="3"
                name="radioGroup"
                value={3}
                checked={questionsCount === 3}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field>
              <Radio
                label="4"
                name="radioGroup"
                value={4}
                checked={questionsCount === 4}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field>
              <Radio
                label="5"
                name="radioGroup"
                value={5}
                checked={questionsCount === 5}
                onChange={handleChange}
              />
            </Form.Field>
            {questions && <Questions questions={questions} />}

            <Button color="orange" size="large" onClick={handleClick}>
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
