//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

// include your styles into the webpack bundle
import "../styles/index.css";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app")
);
