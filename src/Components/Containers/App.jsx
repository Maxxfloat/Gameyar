import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "../MainComponents/Header/Header";
import Sidebar from "../MainComponents/Sidebar/Sidebar";
import Modal from "../MainComponents/Modal/Modal";

// --- Pages ---
import Home from "../Pages/Home/Home";
import EmptyPage from "../Pages/EmptyPage";
import Signup from "../Pages/Signup";
import Test from "../Pages/Test";

// --- Pages ---

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Modal />
        <div style={{ height: "4rem" }} />
        <div className="app__container">
          <Sidebar />
          <div className="app__pages__container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/test" component={Test} />

              <Route component={EmptyPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
