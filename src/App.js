import React from "react";
import Lang from "./context";
import Screen from "./Screen";
import translations from "./translation";

function App() {
  return (
    <Lang defaultLang="en" translation={translations}>
      <Screen />
    </Lang>
  );
}

export default App;
