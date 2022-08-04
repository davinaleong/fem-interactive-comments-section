import React from "react";
import CommentComponent from "../comment/comment.component";
import "./comments.css";

type AppProps = {
  currentUser: any;
  comments: any;
};

class CommentsComponet extends React.Component {
  constructor(props: any) {
    super(props);

    // const { comments } = this.props;

    // this.state = {
    //   comments: comments,
    // };
  }

  render = () => {
    const { currentUser } = this.props;
    return (
      <div className="comments-flex">
        <CommentComponent currentUser={currentUser} isCurrentUser={true} />
      </div>
    );
  };
}

export default CommentsComponet;
