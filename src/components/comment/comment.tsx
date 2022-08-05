import React from "react";
import "./comment.css";

import Card from "./../card/card";

type AppProps = {
  currentUser: object;
  object: object;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
  toggleDeleteClickHandler: Function;
  updateContentClickHandler: Function;
  createContentClickHandler: Function;
};

const Comment = (props: any) => {
  const {
    currentUser,
    object,
    increaseScoreClickHandler,
    decreaseScoreClickHandler,
    toggleDeleteClickHandler,
    updateContentClickHandler,
    createContentClickHandler,
  } = props;

  const { replies } = object;
  const replyElements: any[] = [];
  replies.forEach((reply, index) => {
    replyElements.push(
      <Card
        key={`r${index}`}
        isReply={true}
        currentUser={currentUser}
        object={reply}
        increaseScoreClickHandler={increaseScoreClickHandler}
        decreaseScoreClickHandler={decreaseScoreClickHandler}
        toggleDeleteClickHandler={toggleDeleteClickHandler}
        updateContentClickHandler={updateContentClickHandler}
        createContentClickHandler={createContentClickHandler}
      />
    );
  });

  return (
    <div className="comment-flex">
      <Card
        currentUser={currentUser}
        object={object}
        increaseScoreClickHandler={increaseScoreClickHandler}
        decreaseScoreClickHandler={decreaseScoreClickHandler}
        toggleDeleteClickHandler={toggleDeleteClickHandler}
        updateContentClickHandler={updateContentClickHandler}
        createContentClickHandler={createContentClickHandler}
      />
      <div className="replies-flex">{replyElements}</div>
    </div>
  );
};

export default Comment;
