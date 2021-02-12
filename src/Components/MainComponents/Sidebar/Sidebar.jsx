import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseSquare } from "react-icons/ai";

import styles from "./Sidebar.module.scss";
import { pages } from "./SidebarData";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={sidebarOpen ? styles.sidebar__section : styles.sidebar__close}
    >
      <div className={styles.sidebar__container}>
        <div
          className={styles.sidebar__close__toggle}
          onClick={() => setSidebarOpen(false)}
        >
          <AiOutlineCloseSquare />
        </div>
        {/* <div className={styles.sidebar__links__cotainer}> */}
        <ul className={styles.sidebar__links__group}>
          {pages.map((link, index) => (
            <li key={link + index} onClick={() => setSidebarOpen(false)}>
              <Link to="/">{link}</Link>
            </li>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
