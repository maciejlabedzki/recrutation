import React from "react";

// Style
import "./css/styles.css";
import "./css/font/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./component/Navigation/Navigation.js";
import Layout from "./component/Layout/Layout.js";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Layout />
    </div>
  );
}
