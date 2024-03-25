import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// STYLES
import "@styles/global.scss";
import "@styles/media_queries.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
