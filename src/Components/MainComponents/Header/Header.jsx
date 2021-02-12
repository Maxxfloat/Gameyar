import React from "react";
import { MdMenu } from "react-icons/md";

import styles from "./Header.module.scss";

const Header = (props) => {
  console.log("sidebarOpen: ", props.sidebarOpen);
  return (
    <div className={styles.header__section}>
      <div className={styles.header__container}>
        <div className={styles.header__banner}>banner</div>
        <div
          className={styles.sidebar__toggle}
          onClick={() => {
            props.setSidebarOpen(!props.sidebarOpen);
            props.setModal(true);
          }}
        >
          <MdMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
