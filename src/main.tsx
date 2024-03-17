import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./screens/Login.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <Login /> */}
  </React.StrictMode>
);
