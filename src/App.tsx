import React from "react";
import data from "./db/data.json";

import AttributionComponent from "./components/attribution/attribution.component";
import MainComponent from "./components/main/main.component";
import SwatchesComponent from "./components/swatches/swatches.component";

function App() {
  return (
    <div className="body | bg-grey-200">
      <MainComponent data={data} />
      <SwatchesComponent />
      <AttributionComponent />
    </div>
  );
}

export default App;
