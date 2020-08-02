import React from "react";

// Style
import "./css/styles.css";
import "./css/font/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./component/Navigation/Navigation.js";
import Layout from "./component/Layout/Layout.js";

import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// Send functions with actions to do async
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
