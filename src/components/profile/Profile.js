import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";

import axios from "../../services/axios";

export default function Profile({ match }) {
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const login = match.params.login;
  useEffect(() => {
    (async () => {
      try {
        const req1 = axios.get(`users/${login}`);
        const req2 = axios.get(`users/${login}/repos`);
        const res1 = await req1;
        const res2 = await req2;
        console.log(res1, res2);
        setUserData(res1.data);
        setUserRepos(res2.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [login]);

  return (
    <div className={styles.container}>
      <div className={styles.profileInfo}>
        <img
          className={styles.avatar}
          src={userData.avatar_url}
          alt="profile"
        />
        <div className={styles.userDetails}>
          {userData.name && <h2>{userData.name}</h2>}
          <h4 className={styles.login}>{userData.login}</h4>
          <div className={styles.interactions}>
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
          </div>
          <a className={`${styles.btn} link`} href={userData.html_url}>
            Visit Github Profile
          </a>
        </div>
      </div>
      <div className={styles.repos}>
        {userRepos.length ? (
          userRepos.map((repo) => (
            <div key={repo.id} className={styles.repo}>
              <h3>{repo.name}</h3>
              <p>{repo.stargazers_count}</p>
              <p>{repo.watchers}</p>
              {repo.language && <p className={styles.lang}>{repo.language}</p>}
            </div>
          ))
        ) : (
          <h1>This user has no repositories</h1>
        )}
      </div>
    </div>
  );
}
