import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Page() {
  return <App />;
}

root.render(<Page />);
