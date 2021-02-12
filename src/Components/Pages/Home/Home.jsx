import React from "react";

import styles from "./Home.module.scss";

import Banner from "./HomeComponents/Banner";
import TopPlayers from "./HomeComponents/TopPlayers";
import Events from "./HomeComponents/Events";
import Comment from "./HomeComponents/Comment";
import UsersStatics from "./HomeComponents/UsersStatics";

const Home = () => {
  return (
    <div className={styles.home__section}>
      <Banner />
      <UsersStatics />
      <TopPlayers />
      <Events />
      <Comment />
    </div>
  );
};

export default Home;
