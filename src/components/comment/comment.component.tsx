import React from "react";
import "./comment.css";

import CounterInputComponent from "./../counter-input/counter-input.component";
import CommentInfoComponent from "../comment-info/comment-info.component";
import ButtonComponent from "../button/button.component";
import ReplyIcon from "../../icons/reply.icon";
import EditIcon from "../../icons/edit.icon";
import DeleteIcon from "../../icons/delete.icon";

type AppProps = {
  isCurrentUser: boolean;
  comment: Object;
  commentHandler: any;
};

class CommentComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      comment: this.props.comment,
    };
  }

  replyHandler = (e) => {
    console.log(`Reply Button Clicked`);
  };

  deleteHandler = (e) => {
    console.log(`Delete Button Clicked`);
  };

  editHandler = (e) => {
    console.log(`Edit Button Clicked`);
  };

  renderButtons = (isCurrentUser: boolean = false) => {
    let buttons = (
      <ButtonComponent type="btn-link-primary" clickHandler={this.replyHandler}>
        <ReplyIcon /> Reply
      </ButtonComponent>
    );

    if (isCurrentUser) {
      buttons = (
        <>
          <ButtonComponent
            type="btn-link-red"
            clickHandler={this.deleteHandler}
          >
            <DeleteIcon /> Delete
          </ButtonComponent>
          <ButtonComponent
            type="btn-link-primary"
            clickHandler={this.editHandler}
          >
            <EditIcon /> Edit
          </ButtonComponent>
        </>
      );
    }

    return buttons;
  };

  render = () => {
    const { isCurrentUser } = this.props;
    return (
      <div className="comment-grid">
        <div className="comment-counter-cell">
          <CounterInputComponent score="12" />
        </div>
        <div className="comment-info-cell">
          <CommentInfoComponent
            username="juliusomo"
            isCurrentUser={false}
            createdAt="1 month ago"
          />
        </div>
        <div className="comment-button-cell button-grid">
          {this.renderButtons(isCurrentUser)}
        </div>
        <div className="comment-content-cell">Content</div>
      </div>
    );
  };
}

export default CommentComponent;
