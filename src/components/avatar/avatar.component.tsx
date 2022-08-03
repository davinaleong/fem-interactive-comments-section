import React from "react";
import "./avatar.css";

type AppProps = {
  src: string;
  alt: string;
};

const AvatarComponent = (props: any) => {
  const { src, alt } = props;

  return <img src={src} alt={alt} className="image-avatar" />;
};

export default AvatarComponent;
