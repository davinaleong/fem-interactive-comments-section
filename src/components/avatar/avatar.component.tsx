import React from "react";
import AmyrobsonAvatar from "../../avatars/amyrobson.avatar";
import JuliusomoAvatar from "../../avatars/juliusomo.avatar";
import MaxblagunAvatar from "../../avatars/maxblagun.avatar";
import RamsesmironAvatar from "../../avatars/ramsesmiron.avatar";
import "./avatar.css";

type AppProps = {
  username: string;
};

const AvatarComponent = (props: any) => {
  const { username } = props;

  let avatar: any = null;
  switch (username) {
    case "juliusomo":
      avatar = <JuliusomoAvatar />;
      break;

    case "amyrobson":
      avatar = <AmyrobsonAvatar />;
      break;

    case "maxblagun":
      avatar = <MaxblagunAvatar />;
      break;

    case "ramsesmiron":
      avatar = <RamsesmironAvatar />;
      break;
  }

  return avatar;
};

export default AvatarComponent;
