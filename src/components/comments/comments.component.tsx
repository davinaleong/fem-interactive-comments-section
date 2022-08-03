import React from "react";
import InputComponent from "../input/input.component";
import "./comments.css";

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
      <div className="comments-grid | container">
        <InputComponent
          currentUser={currentUser}
          commentsHandler={this.commentsHandler}
        />
      </div>
    );
  };
}

export default CommentsComponent;
