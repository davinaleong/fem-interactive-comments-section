import React from "react";
import CommentInputComponent from "../comment-input/comment-input.component";
import "./main.css";

type AppProps = {
  data: any;
};

class CommentsComponent extends React.Component {
  constructor(props: any) {
    super(props);

    const { data } = this.props;
    const { comments } = data;
    this.state = {
      comments: comments,
    };
  }

  commentsHandler = (comments: any) => {
    this.setState({ comments: comments });
  };

  render = () => {
    const { data } = this.props;
    const { currentUser } = data;
    const { comments, commentId, comment } = this.state;

    return (
      <main className="comments-grid | container">
        <CommentInputComponent
          currentUser={currentUser}
          commentsHandler={this.commentsHandler}
        />
      </main>
    );
  };
}

export default CommentsComponent;
