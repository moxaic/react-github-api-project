import React, { useState } from "react";
import "./app.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Profile, ResultGrid } from "./components";

export default function App() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <Router>
      <Navbar setSearchResult={setSearchResult} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <ResultGrid searchResult={searchResult} />}
        />
        <Route path="/:login" component={Profile} />
      </Switch>
    </Router>
  );
}
