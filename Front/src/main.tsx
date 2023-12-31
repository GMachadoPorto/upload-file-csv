import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StyledGlobal } from "./styles/globalStyles.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledGlobal />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
