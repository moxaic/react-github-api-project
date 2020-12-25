import React, { useRef } from "react";
import styles from "./navbar.module.css";

import axios from "../../services/axios";

export default function SearchBar({ setSearchResult }) {
  const inputText = useRef();

  const handleTextInput = () => {
    const query = inputText.current.value;
    if (query) {
      axios.get(`search/users?q=${query}in:user`).then((res) => {
        console.log(res);
        setSearchResult(res.data.items);
      });
    }
  };
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.inputText}
        ref={inputText}
        type="text"
        onChange={() => handleTextInput()}
        placeholder="Search for a user or organisation"
      />
    </div>
  );
}
