import React from "react";
import styles from "./resultGrid.module.css";

export default function ProfileCard({ handleDelete, info }) {
  const { avatar_url, login } = info;
  return (
    <div className={styles.profileCard}>
      <img className={styles.avatar} src={avatar_url} alt="profile" />
      <h2>{login}</h2>
      <button
        className={styles.delete}
        onClick={(e) => {
          handleDelete(login);
          e.preventDefault();
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
      >
        X
      </button>
    </div>
  );
}
