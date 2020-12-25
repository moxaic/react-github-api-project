import React from "react";
import styles from "./resultGrid.module.css";

export default function ProfileCard({ info }) {
  const { avatar_url, login } = info;
  return (
    <div className={styles.profileCard}>
      <img className={styles.avatar} src={avatar_url} alt="profile" />
      <h2>{login}</h2>
    </div>
  );
}
