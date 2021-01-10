import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages/Components
import NavBar from "./components/layout/NavBar";
import Landing from "./components/layout/Landing";

import Routes from "./components/routing/Routes";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import axios from "axios";

import "./App.css";
// import { compareSync } from "bcryptjs";

axios.defaults.baseURL = "https://laces-be.herokuapp.com";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        {" "}
        <Fragment>
          <NavBar />
          <Switch>
            {" "}
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
