import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage.js";
import LoginPage from "./pages/LoginPage.js";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
      </ul>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LoginPage} />
    </div>
  );
}

export default App;
