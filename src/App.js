import React, { useState } from "react";
import "./App.css";
import { getResponse } from "./api/API";
import User from "./user/User";
import LoadingScreen from "./loadingscreen/LoadingScreen";
import ErrorPage from "./ErrorPage";
import FormContainer from "./formcontainer/FormContainer";
import QuestionsContainer from "./questionscontainer/QuestionsContainer";
import Header from "./header/Header";
const { Configuration, OpenAIApi } = require("openai");

function App() {
  const [user, setUser] = useState();
  const [inputText, setInputText] = useState();
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [openAiKey] = useState(
    "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"
  );
  const handleClick = () => {
    setIsLoading(true);
    getResponse(inputText, setIsLoading, setError, setQuestions);
  };

  const configuration = new Configuration({
    apiKey: openAiKey,
  });
  const openai = new OpenAIApi(configuration);

  const getResponse = async () => {
    await openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: `list questions from '${inputText}'`,
        max_tokens: 256,
        temperature: 0.7,
      })
      .then((response) => {
        setQuestions(response.data.choices[0].text);
      })
      .catch((error) => {
        setError(error);
      });
    setIsLoading(false);
  };

  if (!user) return <User setUser={setUser} />;

  if (error) return <ErrorPage error={error} />;

  return (
    <div className="page-container">
      <Header user={user} />
      <div className="app-container">
        <FormContainer
          setInputText={setInputText}
          inputText={inputText}
          handleClick={handleClick}
        />
        <br></br>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <QuestionsContainer questions={questions} />
        )}
      </div>
    </div>
  );
}

export default App;
