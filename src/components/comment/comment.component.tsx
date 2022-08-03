import React from "react";
import "./comment.css";

import CounterInputComponent from "./../counter-input/counter-input.component";
import CommentInfoComponent from "../comment-info/comment-info.component";

type AppProps = {
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

  render = () => {
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
        <div className="comment-button-cell">Buttons</div>
        <div className="comment-content-cell">Content</div>
      </div>
    );
  };
}

export default CommentComponent;
