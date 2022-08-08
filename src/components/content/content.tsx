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
  parent: Object;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
  toggleReplyClickHandler: Function;
  toggleDeleteClickHandler: Function;
  updateContentClickHandler: Function;
  contentInputHandler: Function;
};

export default class Content extends React.Component {
  constructor(props: any) {
    super(props);

    const { isReply, object } = this.props;
    const { replyingTo, content } = object;

    this.state = {
      toggleEditMode: false,
      contentEditable: isReply ? `@${replyingTo} ${content}` : `${content}`,
    };
  }

  toggleEditClickHandler = (event: any) => {
    const { toggleEditMode } = this.state;
    this.setState({ toggleEditMode: !toggleEditMode });
  };

  contentInputHandler = (event: any) => {
    const { isReply, object, contentInputHandler } = this.props;
    const { replyingTo } = object;
    const value = removeUsername(event.target.value);
    const contentEditable = isReply ? `@${replyingTo} ${value}` : value;

    this.setState({
      contentEditable,
    });
    contentInputHandler(contentEditable);
  };

  updateContentClickHandler = (event: any) => {
    const { object, parent, updateContentClickHandler } = this.props;
    this.setState({ toggleEditMode: false });
    updateContentClickHandler(object.id, parent.id);
  };

  render = () => {
    const {
      isReply,
      currentUser,
      object,
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
    const { replyingTo } = object;

    let contentElement: any = isReply ? (
      <p>
        <mark>@{replyingTo}</mark> {content}
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
          <Button
            type="btn-primary"
            clickHandler={this.updateContentClickHandler}
          >
            Update
          </Button>
        </div>
      </div>
    );
  };
}
