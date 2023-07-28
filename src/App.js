import React from "react";

import MultiDimensions from "./compoents/MultipleDimensions/MultiDimensions";

import MixDimensions from "./compoents/MixDirmensions/MixDimensions";
import SimpleDimension from "./compoents/ToDimensional/SimpleDimension";

const App = () => {
  return (
    <div className="App">
      <SimpleDimension />
      <MultiDimensions />
      <MixDimensions />
    </div>
  );
};
export default App;
