import React from "react";
import "./comment.css";

import CounterInputComponent from "./../counter-input/counter-input.component";
import CommentInfoComponent from "../comment-info/comment-info.component";
import ButtonGridComponent from "../button-grid/button-grid.component";
import ContentInputComponent from "../content-input/content-input.component";

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
          <ButtonGridComponent
            isCurrentUser={false}
            replyHandler={this.replyHandler}
            deleteHandler={this.deleteHandler}
            editHandler={this.editHandler}
          />
        </div>
        <div className="comment-content-cell">
          <ContentInputComponent
            username="juliusomo"
            content="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
            edit={false}
          />
        </div>
      </div>
    );
  };
}

export default CommentComponent;
