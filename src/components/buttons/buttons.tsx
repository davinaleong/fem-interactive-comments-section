import React from "react";
import "./buttons.css";

import Button from "../button/button";
import ReplyIcon from "../../icons/reply.icon";
import DeleteIcon from "../../icons/delete.icon";
import EditIcon from "../../icons/edit.icon";

type AppProps = {
  isCurrentUser: boolean;
  toggleReplyClickHandler: Function;
  toggleDeleteClickHandler: Function;
  toggleEditClickHandler: Function;
};

export default class Buttons extends React.Component {
  constructor(props: any) {
    super(props);
  }

  toggleReplyClickHandler = (event: any) => {
    this.props.toggleReplyClickHandler(event);
  };

  toggleDeleteClickHandler = (event: any) => {
    this.props.toggleDeleteClickHandler(event);
  };

  toggleEditClickHandler = (event: any) => {
    this.props.toggleEditClickHandler(event);
  };

  render = () => {
    const { isCurrentUser } = this.props;
    let buttons: any = (
      <Button
        type="btn-link btn-link-primary"
        clickHandler={this.toggleReplyClickHandler}
      >
        <ReplyIcon /> Reply
      </Button>
    );

    if (isCurrentUser) {
      buttons = (
        <>
          <Button
            type="btn-link btn-link-danger"
            clickHandler={this.toggleDeleteClickHandler}
          >
            <DeleteIcon /> Delete
          </Button>
          <Button
            type="btn-link btn-link-primary"
            clickHandler={this.toggleEditClickHandler}
          >
            <EditIcon /> Edit
          </Button>
        </>
      );
    }

    return <div className="buttons-flex">{buttons}</div>;
  };
}
