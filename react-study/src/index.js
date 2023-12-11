import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ConfirmButton from "./chapter_08/confirmbutton";
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>,
  document.getElementById("root")
);
