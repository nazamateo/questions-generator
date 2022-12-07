import React from "react";
import { OPENAI_KEY } from "../config/config";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

export const getResponse = async (
  questionsCount,
  inputText,
  setQuestionsCount,
  setIsLoading
) => {
  await openai
    .createCompletion({
      model: "text-davinci-003",
      prompt: `list ${questionsCount} questions from '${inputText}'
      in javascript array format assigned to Questions object`,
      max_tokens: 256,
      temperature: 0.7,
    })
    .then((response) => {
      console.log(response.data);
      setQuestionsCount(response.data);
    });
  setIsLoading(false);
};
