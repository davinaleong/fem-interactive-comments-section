import React from "react";
import SwatchComponent from "../swatch/swatch";

const SwatchesComponent = () => {
  return (
    <div className="swatches">
      <SwatchComponent classList="bg-primary-300" />
      <SwatchComponent classList="bg-primary-400" />
      <SwatchComponent classList="bg-red-300" />
      <SwatchComponent classList="bg-red-400" />
      <SwatchComponent classList="bg-neutral-400" />
      <SwatchComponent classList="bg-neutral-900" />
      <SwatchComponent classList="bg-grey-100" />
      <SwatchComponent classList="bg-grey-200" />
      <SwatchComponent classList="bg-grey-300" />
    </div>
  );
};

export default SwatchesComponent;
