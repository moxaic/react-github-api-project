import React, { useRef } from "react";
import styles from "./navbar.module.css";

import axios from "../../services/axios";

export default function SearchBar({ setSearchResult }) {
  const inputText = useRef();

  const handleTextInput = async () => {
    const query = inputText.current.value;
    if (query !== "") {
      try {
        const res = await axios.get(
          `search/users?q=${query}in:user&per_page=32`
        );
        setSearchResult(res.data.items);
      } catch (err) {
        console.log(err);
      }
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
