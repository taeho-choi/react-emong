import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage.js";
import LoginPage from "./pages/LoginPage.js";

function App() {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={() => (
          <MainPage activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        )}
      />
      <Route
        exact
        path="/login"
        render={() => (
          <LoginPage activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        )}
      />
    </div>
  );
}

export default App;
