import React from "react";

type AppProps = {
  classList: string;
};

const SwatchComponent = (props: any) => {
  const { classList } = props;

  return <div className={classList}>&nbsp;</div>;
};

export default SwatchComponent;
