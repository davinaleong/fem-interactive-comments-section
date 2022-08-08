import React from "react";
import "./comment.css";

import Card from "./../card/card";

type AppProps = {
  currentUser: Object;
  object: Object;
  content: String;
  replyingTo: String;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
  toggleDeleteClickHandler: Function;
  updateContentClickHandler: Function;
  createContentClickHandler: Function;
  contentInputHandler: Function;
  updateReplyingTo: Function;
};

const Comment = (props: any) => {
  const {
    currentUser,
    object,
    content,
    replyingTo,
    increaseScoreClickHandler,
    decreaseScoreClickHandler,
    toggleDeleteClickHandler,
    updateContentClickHandler,
    createContentClickHandler,
    contentInputHandler,
    updateReplyingTo,
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
        parent={object}
        replyingTo={replyingTo}
        content={content}
        increaseScoreClickHandler={increaseScoreClickHandler}
        decreaseScoreClickHandler={decreaseScoreClickHandler}
        toggleDeleteClickHandler={toggleDeleteClickHandler}
        updateContentClickHandler={updateContentClickHandler}
        createContentClickHandler={createContentClickHandler}
        contentInputHandler={contentInputHandler}
        updateReplyingTo={updateReplyingTo}
      />
    );
  });

  return (
    <div className="comment-flex">
      <Card
        currentUser={currentUser}
        object={object}
        content={content}
        replyingTo={replyingTo}
        increaseScoreClickHandler={increaseScoreClickHandler}
        decreaseScoreClickHandler={decreaseScoreClickHandler}
        toggleDeleteClickHandler={toggleDeleteClickHandler}
        updateContentClickHandler={updateContentClickHandler}
        createContentClickHandler={createContentClickHandler}
        contentInputHandler={contentInputHandler}
        updateReplyingTo={updateReplyingTo}
      />
      <div className="replies-flex">{replyElements}</div>
    </div>
  );
};

export default Comment;
