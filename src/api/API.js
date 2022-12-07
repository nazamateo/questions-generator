import React from "react";
import { OPENAI_KEY } from "../config/config";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

export const getResponse = async (
  inputText,
  setIsLoading,
  setError,
  setQuestions
) => {
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
