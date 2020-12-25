import React from "react";
import styles from "./navbar.module.css";

import SearchBar from "./SearchBar";

export default function Navbar({ setSearchResult }) {
  return (
    <>
      <div className={styles.container}>Github clone</div>
      <SearchBar setSearchResult={setSearchResult} />
    </>
  );
}
