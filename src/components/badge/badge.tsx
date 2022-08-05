import React from "react";
import "./badge.css";

type AppProps = {
  children: any;
  type: string;
};

const Badge = (props: any) => {
  const { children, type } = props;
  return <div className={`badge ${type}`}>{children}</div>;
};

export default Badge;
