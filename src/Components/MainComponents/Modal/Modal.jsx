import React from "react";
import { connect } from "react-redux";

import "./Modal.scss";

const Modal = ({ setModalOpen, modalOpen }) => {
  return (
    <div
      className={modalOpen ? "modal" : "display__none"}
      onClick={() => setModalOpen()}
    ></div>
  );
};

function mapStateToPorps(state) {
  return {
    modalOpen: state.modalOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setModalOpen: () => dispatch({ type: "MODAL_CLICK" }),
  };
}

export default connect(mapStateToPorps, mapDispatchToProps)(Modal);
