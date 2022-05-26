import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Profile, ResultGrid } from "./components";

export default function App() {
  const [searchResult, setSearchResult] = useState(() => []);
  useEffect(() => {
    localStorage.setItem(
      "github-user-search-result",
      JSON.stringify(searchResult)
    );
    console.log("local storage");
  }, [searchResult]);
  const handleDelete = (login) => {
    setSearchResult((prev) => prev.filter((prev) => prev.login !== login));
  };
  return (
    <Router>
      <Navbar setSearchResult={setSearchResult} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <ResultGrid
              handleDelete={handleDelete}
              searchResult={searchResult}
            />
          )}
        />
        <Route path="/:login" component={Profile} />
      </Switch>
    </Router>
  );
}
