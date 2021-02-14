// import { combineReducers } from "redux";

const initialState = {
  sidebarOpen: false,
  modalOpen: false,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIDEBAR_TOGGLE_CLICK": {
      return {
        sidebarOpen: true,
        modalOpen: true,
      };
    }
    case "SIDEBAR_CLOSE_TOGGLE_CLICK": {
      return {
        sidebarOpen: false,
        modalOpen: false,
      };
    }
    case "MODAL_CLICK": {
      return {
        sidebarOpen: false,
        modalOpen: false,
      };
    }
    default: {
      return {
        sidebarOpen: false,
        modalOpen: false,
      };
    }
  }
};

// combineReducers({ sidebarReducer: sidebarReducer });

export default sidebarReducer;
