import React from "react";
import "./comment.css";

import Card from "./../card/card";

type AppProps = {
  object: object;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
  toggleReplyClickHandler: Function;
  toggleDeleteClickHandler: Function;
  toggleEditClickHandler: Function;
  updateContentClickHandler: Function;
  createContentClickHandler: Function;
};

const Comment = (props: any) => {
  const {
    object,
    increaseScoreClickHandler,
    decreaseScoreClickHandler,
    toggleReplyClickHandler,
    toggleDeleteClickHandler,
    toggleEditClickHandler,
    updateContentClickHandler,
    createContentClickHandler,
  } = props;

  const { replies } = object;
  const replyElements: any[] = [];
  replies.forEach((reply, index) => {
    replyElements.push(
      <Card
        key={`r${index}`}
        object={reply}
        increaseScoreClickHandler={increaseScoreClickHandler}
        decreaseScoreClickHandler={decreaseScoreClickHandler}
        toggleReplyClickHandler={toggleReplyClickHandler}
        toggleDeleteClickHandler={toggleDeleteClickHandler}
        toggleEditClickHandler={toggleEditClickHandler}
        updateContentClickHandler={updateContentClickHandler}
        createContentClickHandler={createContentClickHandler}
      />
    );
  });

  return (
    <div className="comment-flex">
      <Card
        object={object}
        increaseScoreClickHandler={increaseScoreClickHandler}
        decreaseScoreClickHandler={decreaseScoreClickHandler}
        toggleReplyClickHandler={toggleReplyClickHandler}
        toggleDeleteClickHandler={toggleDeleteClickHandler}
        toggleEditClickHandler={toggleEditClickHandler}
        updateContentClickHandler={updateContentClickHandler}
        createContentClickHandler={createContentClickHandler}
      />
      <div className="replies-flex">{replyElements}</div>
    </div>
  );
};

export default Comment;
