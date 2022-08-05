import React from "react";
import "./info.css";

import Avatar from "../avatar/avatar";
import Badge from "../badge/badge";
import Username from "../username/username";
import CreatedAt from "../created-at/created-at";

type AppProps = {
  isCurrentUser: boolean;
  username: string;
  createdAt: string;
};

const Info = (props: any) => {
  const { isCurrentUser, username, createdAt } = props;

  const badge: any = isCurrentUser ? (
    <Badge type="badge-primary">You</Badge>
  ) : null;

  return (
    <div className="info-flex">
      <Avatar username={username} />
      <Username>{username}</Username>
      {badge}
      <CreatedAt>{createdAt}</CreatedAt>
    </div>
  );
};

export default Info;
