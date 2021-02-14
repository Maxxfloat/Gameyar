import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AiOutlineCloseSquare } from "react-icons/ai";

import "./Sidebar.scss";
import { pages } from "./SidebarData";

const Sidebar = ({ sidebarOpen, setSidebarClose }) => {
  const sidebarSection = React.useRef(null);

  React.useEffect(() => {
    console.log("sidebar width: ", sidebarSection.current.style.width);
    if (sidebarOpen) {
      sidebarSection.current.style.width = "15rem";
    } else {
      sidebarSection.current.style.width = "0px";
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
        {/* <div className={styles.sidebar__links__cotainer}> */}
        <ul className="sidebar__links__group">
          {pages.map((link, index) => (
            <li key={link + index} onClick={() => setSidebarClose()}>
              <Link to="/">{link}</Link>
            </li>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sidebarOpen: state.sidebarOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSidebarClose: () => dispatch({ type: "SIDEBAR_CLOSE_TOGGLE_CLICK" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
