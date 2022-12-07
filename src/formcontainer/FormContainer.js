import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";

export default function FormContainer({
  inputText,
  setInputText,
  handleClick,
}) {
  return (
    <Form>
      <Form.Field
        control={TextArea}
        placeholder="Paste your lesson gist here.."
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <br></br>
      <Button color="orange" size="large" onClick={handleClick}>
        <i class="paper plane outline icon"></i>
        Generate
      </Button>
    </Form>
  );
}
