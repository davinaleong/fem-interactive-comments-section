import React from "react";
import "./card.css";

import Content from "../content/content";
import Input from "../input/input";

type AppProps = {
  isReply: boolean;
  currentUser: object;
  object: object;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
  toggleDeleteClickHandler: Function;
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
    const { showInput } = this.state;
    this.setState({ showInput: !showInput });
  };

  render = () => {
    const {
      isReply,
      currentUser,
      object,
      increaseScoreClickHandler,
      decreaseScoreClickHandler,
      toggleDeleteClickHandler,
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
          isReply={isReply}
          currentUser={currentUser}
          object={object}
          increaseScoreClickHandler={increaseScoreClickHandler}
          decreaseScoreClickHandler={decreaseScoreClickHandler}
          toggleReplyClickHandler={this.toggleReplyClickHandler}
          toggleDeleteClickHandler={toggleDeleteClickHandler}
          updateContentClickHandler={updateContentClickHandler}
        />
        {inputElement}
      </div>
    );
  };
}
