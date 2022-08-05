import React from "react";
import "./created-at.css";

type AppProps = {
  children: any;
};

const CreatedAt = (props: any) => {
  const { children } = props;
  return <div className="info-created-at">{children}</div>;
};

export default CreatedAt;
