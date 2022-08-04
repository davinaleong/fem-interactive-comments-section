import React from "react";
import "./comment.css";

import CommentGridComponent from "../comment-grid/comment-grid.component";
import CommentInputComponent from "../comment-input/comment-input.component";

type AppProps = {
  currentUser: any;
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

  render = () => {
    const { currentUser, isCurrentUser } = this.props;
    return (
      <>
        <CommentGridComponent
          currentUser={currentUser}
          replyHandler={this.replyHandler}
          deleteHandler={this.deleteHandler}
          editHandler={this.editHandler}
        />
        <div className="replies-grid">
          <CommentGridComponent
            commentUser="juliusomo"
            replyHandler={this.replyHandler}
            deleteHandler={this.deleteHandler}
            editHandler={this.editHandler}
          />
        </div>
      </>
    );
  };
}

export default CommentComponent;
