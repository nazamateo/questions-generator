import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import "./User.css";

export default function User({ setUser }) {
  const [name, setName] = useState("");
  function handleClickUser() {
    setUser(name);
  }
  return (
    <div className="user-container">
      <Form>
        <div className="user-input">
          <Input
            placeholder="Hi! What is your name?"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <Button color="orange" size="large" onClick={handleClickUser}>
          <i class="paper plane outline icon"></i>
          Submit
        </Button>
      </Form>
    </div>
  );
}
