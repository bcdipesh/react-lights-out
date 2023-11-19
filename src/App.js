import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <Board nrows={4} ncols={4} chanceLightStartsOn={1.0} />
    </div>
  );
}

export default App;
