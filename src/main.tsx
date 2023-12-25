import React from "react";
import ReactDOM from "react-dom/client";
import { GameRandomizerProvider } from "./context/GameRandomizer.tsx";
import { App } from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GameRandomizerProvider>
      <App />
    </GameRandomizerProvider>
  </React.StrictMode>
);
