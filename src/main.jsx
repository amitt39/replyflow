import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import TicketsProvider from "./context/TicketsContext.jsx";
import AppPreferencesProvider from "./context/AppPreferencesContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppPreferencesProvider>
        <TicketsProvider>
          <App />
        </TicketsProvider>
      </AppPreferencesProvider>
    </BrowserRouter>
  </StrictMode>,
);
