import React from "react";
import AttributionComponent from "./components/attribution/attribution.component";

import SwatchesComponent from "./components/swatches/swatches.component";

function App() {
  return (
    <div className="body | bg-grey-200">
      <SwatchesComponent />
      <AttributionComponent />
    </div>
  );
}

export default App;
