import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AiOutlineCloseSquare } from "react-icons/ai";

import "./Sidebar.scss";
import { pages } from "./SidebarData";

const Sidebar = ({ sidebarOpen, setSidebarClose }) => {
  const sidebarSection = React.useRef(null);

  React.useEffect(() => {
    let mql = window.matchMedia("(min-width: 38rem)").matches;
    if (mql) {
      sidebarSection.current.style.width = "15rem";
    } else {
      if (sidebarOpen) {
        sidebarSection.current.style.width = "15rem";
      } else {
        sidebarSection.current.style.width = "0px";
      }
    }
  }, [sidebarOpen]);

  return (
    <div ref={sidebarSection} className="sidebar__section">
      <div className="sidebar__container">
        <div
          className="sidebar__close__toggle"
          onClick={() => setSidebarClose()}
        >
          <AiOutlineCloseSquare />
        </div>
        <ul className="sidebar__links__group">
          {pages.map((link, index) => (
            <li key={link + index} onClick={() => setSidebarClose()}>
              <Link to="/">{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const sidebar = { ...state.sidebar };
  return {
    sidebarOpen: sidebar.sidebarOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSidebarClose: () => dispatch({ type: "SIDEBAR_CLOSE_TOGGLE_CLICK" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
