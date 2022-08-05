import React from "react";
import data from "./db/data.json";

import AttributionComponent from "./components/attribution/attribution.component";
import MainComponent from "./components/main/main";
import SwatchesComponent from "./components/swatches/swatches";

function App() {
  return (
    <div className="body | text-neutral-900 bg-grey-200">
      <MainComponent data={data} />
      <SwatchesComponent />
      <AttributionComponent />
    </div>
  );
}

export default App;
