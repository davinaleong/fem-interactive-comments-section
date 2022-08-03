import React from "react";
import AvatarComponent from "../avatar/avatar.component";
import "./comment-info.css";

type AppProps = {
  username: string;
  isCurrentUser: boolean;
  createdAt: string;
};

const CommentInfoComponent = (props: any) => {
  const { username, isCurrentUser, createdAt } = props;
  let badge = null;
  if (isCurrentUser) {
    badge = <div className="badge badge-primary">You</div>;
  }
  return (
    <div className="comment-info">
      <AvatarComponent username={username} />
      <p className="info-username">{username}</p>
      {badge}
      <p className="info-created-at">{createdAt}</p>
    </div>
  );
};

export default CommentInfoComponent;
