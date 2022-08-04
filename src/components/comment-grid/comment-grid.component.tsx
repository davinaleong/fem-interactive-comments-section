import React from "react";
import "./comment-grid.css";

import CounterInputComponent from "./../counter-input/counter-input.component";
import CommentInfoComponent from "../comment-info/comment-info.component";
import ButtonGridComponent from "../button-grid/button-grid.component";
import ContentInputComponent from "../content-input/content-input.component";
import CommentInputComponent from "../comment-input/comment-input.component";

type AppProps = {
  commentUser: string;
  currentUser: any;
  isCurrentUser: boolean;
  comment: Object;
  commentHandler: any;
};

const CommentGridComponent = (props: any) => {
  const { commentUser, currentUser, isCurrentUser } = props;

  return (
    <>
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
            replyHandler={props.replyHandler}
            deleteHandler={props.deleteHandler}
            editHandler={props.editHandler}
          />
        </div>
        <div className="comment-content-cell">
          <ContentInputComponent
            username={commentUser}
            content="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
            edit={false}
          />
        </div>
      </div>
      <CommentInputComponent isReplyInput={true} currentUser={currentUser} />
    </>
  );
};

export default CommentGridComponent;
