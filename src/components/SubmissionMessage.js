import React from "react";
import { Message } from "semantic-ui-react";

const SubmissionMessage = props => {
  return props.visible ? (
    props.success ? (
      <Message success>
        <Message.Header>Successfully Updated Information</Message.Header>
      </Message>
    ) : (
      <Message negative>
        <Message.Header>Could Not Update Information</Message.Header>
        <p>
          An error occurred when trying to update your information. Try again
          later.
        </p>
      </Message>
    )
  ) : null;
};

export default SubmissionMessage;
