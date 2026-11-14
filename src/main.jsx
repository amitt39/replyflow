import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import TicketsProvider from "./context/TicketsContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TicketsProvider>
        <App />
      </TicketsProvider>
    </BrowserRouter>
  </StrictMode>,
);
