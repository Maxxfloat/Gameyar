import React from "react";
import { MdMenu } from "react-icons/md";
import { connect } from "react-redux";

import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <div className={styles.header__section}>
      <div className={styles.header__container}>
        <div className={styles.header__banner}>banner</div>
        <div
          className={styles.sidebar__toggle}
          onClick={() => {
            props.setSidebarOpen();
          }}
        >
          <MdMenu />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSidebarOpen: () => dispatch({ type: "SIDEBAR_TOGGLE_CLICK" }),
  };
};

export default connect(null, mapDispatchToProps)(Header);
