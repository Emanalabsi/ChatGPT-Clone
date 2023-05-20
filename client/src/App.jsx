import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Main } from "./components/Main";
import { SideBar } from "./components/SideBar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="app">
      <SideBar />
      <Main />
    </div>
  </React.StrictMode>
);
