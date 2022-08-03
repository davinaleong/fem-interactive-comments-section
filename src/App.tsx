import React from "react";
import data from "./db/data.json";

import AttributionComponent from "./components/attribution/attribution.component";
import CommentsComponent from "./components/comments/comments.component";
import SwatchesComponent from "./components/swatches/swatches.component";

function App() {
  return (
    <div className="body | bg-grey-200">
      <CommentsComponent data={ data } />
      <SwatchesComponent />
      <AttributionComponent />
    </div>
  );
}

export default App;
