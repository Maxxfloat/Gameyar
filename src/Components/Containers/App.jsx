import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "../MainComponents/Header/Header";
import Sidebar from "../MainComponents/Sidebar/Sidebar";
import Modal from "../MainComponents/Modal/Modal";
// --- Pages ---
import Home from "../Pages/Home/Home";
import EmptyPage from "../Pages/EmptyPage";
import Test from "../Pages/Test";
// --- Pages ---

// import Slider from "./Slider";

function App() {
  const [modal, setModal] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    if (!sidebarOpen) {
      setModal(false);
    }
  }, [sidebarOpen]);

  return (
    <div className="app">
      <BrowserRouter>
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          setModal={setModal}
          modal={modal}
        />
        <Modal
          setModal={setModal}
          modal={modal}
          setSidebarOpen={setSidebarOpen}
        />
        <div style={{ height: "3rem" }} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />

          <Route component={EmptyPage} />
        </Switch>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
