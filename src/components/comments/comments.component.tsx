import React from "react";
import CommentComponent from "../comment/comment.component";
import "./comments.css";

type AppProps = {
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
    return (
      <div className="comments-flex">
        <CommentComponent />
      </div>
    );
  };
}

export default CommentsComponet;
