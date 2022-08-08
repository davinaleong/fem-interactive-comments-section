import React from "react";
import "./content.css";

import Counter from "../counter/counter";
import Info from "../info/info";
import Buttons from "../buttons/buttons";
import Button from "../button/button";
import FormField from "../form-field/form-field";

import removeUsername from "../../helpers/removeUsename";

type AppProps = {
  isReply: Boolean;
  currentUser: Object;
  object: Object;
  replyingTo: Object;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
  toggleReplyClickHandler: Function;
  toggleDeleteClickHandler: Function;
  updateContentClickHandler: Function;
};

export default class Content extends React.Component {
  constructor(props: any) {
    super(props);

    const { isReply, object } = this.props;
    const { replyingTo, content } = object;

    const replyingToUsername = replyingTo ? replyingTo.username : ``;

    this.state = {
      toggleEditMode: false,
      contentEditable: isReply
        ? `@${replyingToUsername} ${content}`
        : `${content}`,
    };
  }

  toggleEditClickHandler = (event: any) => {
    const { toggleEditMode } = this.state;
    this.setState({ toggleEditMode: !toggleEditMode });
  };

  contentInputHandler = (event: any) => {
    const { isReply, replyingTo } = this.props;
    const { username } = replyingTo;
    const value = removeUsername(event.target.value);

    this.setState({
      contentEditable: isReply ? `@${username} ${value}` : value,
    });
  };

  render = () => {
    const {
      isReply,
      currentUser,
      object,
      replyingTo,
      increaseScoreClickHandler,
      decreaseScoreClickHandler,
      toggleReplyClickHandler,
      toggleDeleteClickHandler,
      updateContentClickHandler,
    } = this.props;

    const { score, createdAt, content, user } = object;
    const { username } = user;

    const isCurrentUser = currentUser.username == username;

    const { toggleEditMode, contentEditable } = this.state;
    const replyingToUsername = replyingTo ? replyingTo.username : ``;

    let contentElement: any = isReply ? (
      <p>
        <mark>@{replyingToUsername}</mark> {content}
      </p>
    ) : (
      <p>{content}</p>
    );

    if (toggleEditMode) {
      contentElement = (
        <FormField
          value={contentEditable}
          inputHandler={this.contentInputHandler}
        />
      );
    }

    return (
      <div className="content-grid" data-edit={toggleEditMode}>
        <div className="counter-cell">
          <Counter
            score={score}
            increaseScoreClickHandler={increaseScoreClickHandler}
            decreaseScoreClickHandler={decreaseScoreClickHandler}
          />
        </div>
        <div className="info-cell">
          <Info
            isCurrentUser={isCurrentUser}
            username={username}
            createdAt={createdAt}
          />
        </div>
        <div className="buttons-cell">
          <Buttons
            isCurrentUser={isCurrentUser}
            toggleReplyClickHandler={toggleReplyClickHandler}
            toggleDeleteClickHandler={toggleDeleteClickHandler}
            toggleEditClickHandler={this.toggleEditClickHandler}
          />
        </div>
        <div className="content-cell">{contentElement}</div>
        <div className="update-cell">
          <Button type="btn-primary" clickHandler={updateContentClickHandler}>
            Update
          </Button>
        </div>
      </div>
    );
  };
}
