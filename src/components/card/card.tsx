import React from "react";
import "./card.css";

import Content from "../content/content";
import Input from "../input/input";

type AppProps = {
  isReply: boolean;
  currentUser: Object;
  object: Object;
  parent: Object;
  replyingTo: String;
  content: String;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
  toggleDeleteClickHandler: Function;
  updateContentClickHandler: Function;
  createContentClickHandler: Function;
  contentInputHandler: Function;
  updateReplyingTo: Function;
};

export default class Card extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      showInput: false,
    };
  }

  toggleReplyClickHandler = (event: any) => {
    const { object, updateReplyingTo } = this.props;
    const { showInput } = this.state;
    this.setState({ showInput: !showInput });
    updateReplyingTo(object.user.username);
  };

  render = () => {
    const {
      isReply,
      currentUser,
      object,
      parent,
      replyingTo,
      content,
      increaseScoreClickHandler,
      decreaseScoreClickHandler,
      toggleDeleteClickHandler,
      updateContentClickHandler,
      createContentClickHandler,
      contentInputHandler,
    } = this.props;

    const { showInput } = this.state;
    let inputElement = null;

    if (showInput) {
      inputElement = (
        <Input
          currentUser={currentUser}
          objectId={object ? object.id : 0}
          parentId={parent ? parent.id : 0}
          replyingTo={replyingTo}
          content={content}
          createContentClickHandler={createContentClickHandler}
          contentInputHandler={contentInputHandler}
        />
      );
    }

    return (
      <div className="card-flex">
        <Content
          isReply={isReply}
          currentUser={currentUser}
          object={object}
          replyingTo={replyingTo}
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
