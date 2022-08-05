import React from "react";
import "./card.css";

import Content from "../content/content";
import Input from "../input/input";

type AppProps = {
  isInputEnabled: boolean;
  object: object;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
  toggleReplyClickHandler: Function;
  toggleDeleteClickHandler: Function;
  toggleEditClickHandler: Function;
  updateContentClickHandler: Function;
  createContentClickHandler: Function;
};

const Card = (props: any) => {
  const {
    isInputEnabled,
    object,
    increaseScoreClickHandler,
    decreaseScoreClickHandler,
    toggleReplyClickHandler,
    toggleDeleteClickHandler,
    toggleEditClickHandler,
    updateContentClickHandler,
    createContentClickHandler,
  } = props;

  let inputElement = null;

  if (isInputEnabled) {
    inputElement = (
      <Input
        avatar="juliusomo"
        username="amyrobson"
        createContentClickHandler={createContentClickHandler}
      />
    );
  }

  return (
    <div className="card-flex">
      <Content
        object={object}
        increaseScoreClickHandler={increaseScoreClickHandler}
        decreaseScoreClickHandler={decreaseScoreClickHandler}
        toggleReplyClickHandler={toggleReplyClickHandler}
        toggleDeleteClickHandler={toggleDeleteClickHandler}
        toggleEditClickHandler={toggleEditClickHandler}
        updateContentClickHandler={updateContentClickHandler}
      />
      {inputElement}
    </div>
  );
};

export default Card;
