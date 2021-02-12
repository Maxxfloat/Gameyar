import React from "react";

import "./Modal.scss";

const Modal = ({ modal, setModal, setSidebarOpen }) => {
  return (
    <div
      className={modal ? "modal" : "display__none"}
      onClick={() => {
        setModal(false);
        setSidebarOpen(false);
      }}
    ></div>
  );
};

export default Modal;
