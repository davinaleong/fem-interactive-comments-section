import React from "react";
import "./card.css";

import Content from "../content/content";
import Input from "../input/input";

type AppProps = {
  currentUser: object;
  object: object;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
  toggleDeleteClickHandler: Function;
  toggleEditClickHandler: Function;
  updateContentClickHandler: Function;
  createContentClickHandler: Function;
};

export default class Card extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      showInput: false,
    };
  }

  toggleReplyClickHandler = (event: any) => {
    this.setState({ showInput: true });
  };

  render = () => {
    const {
      currentUser,
      object,
      increaseScoreClickHandler,
      decreaseScoreClickHandler,
      toggleDeleteClickHandler,
      toggleEditClickHandler,
      updateContentClickHandler,
      createContentClickHandler,
    } = this.props;

    const { showInput } = this.state;
    let inputElement = null;

    if (showInput) {
      inputElement = (
        <Input
          avatar={currentUser.username}
          username="amyrobson"
          createContentClickHandler={createContentClickHandler}
        />
      );
    }

    return (
      <div className="card-flex">
        <Content
          currentUser={currentUser}
          object={object}
          increaseScoreClickHandler={increaseScoreClickHandler}
          decreaseScoreClickHandler={decreaseScoreClickHandler}
          toggleReplyClickHandler={this.toggleReplyClickHandler}
          toggleDeleteClickHandler={toggleDeleteClickHandler}
          toggleEditClickHandler={toggleEditClickHandler}
          updateContentClickHandler={updateContentClickHandler}
        />
        {inputElement}
      </div>
    );
  };
}
