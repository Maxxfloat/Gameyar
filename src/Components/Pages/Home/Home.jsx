import React from "react";

import "./Home.scss";

import Banner from "./HomeComponents/Banner";
import TopPlayers from "./HomeComponents/TopPlayers";
import Events from "./HomeComponents/Events";
import Comment from "./HomeComponents/Comment";
import UsersStatics from "./HomeComponents/UsersStatics";

const Home = () => {
  return (
    <div className="home__section">
      <Banner />
      <UsersStatics />
      <TopPlayers />
      <Events />
      <Comment />
    </div>
  );
};

export default Home;
