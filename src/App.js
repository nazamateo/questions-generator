import React, { useState } from "react";
import "./App.css";
import { getResponse } from "./api/API";
import User from "./user/User";
import LoadingScreen from "./loadingscreen/LoadingScreen";
import ErrorPage from "./ErrorPage";
import FormContainer from "./formcontainer/FormContainer";
import QuestionsContainer from "./questionscontainer/QuestionsContainer";
import Header from "./header/Header";

function App() {
  const [user, setUser] = useState();
  const [inputText, setInputText] = useState();
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleClick = () => {
    setIsLoading(true);
    getResponse(inputText, setIsLoading, setError, setQuestions);
  };

  if (!user) return <User setUser={setUser} />;
  if (isLoading) return <LoadingScreen />;
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
        <QuestionsContainer questions={questions} />
      </div>
    </div>
  );
}

export default App;
