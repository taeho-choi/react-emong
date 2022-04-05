import React, { useState, useRef } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage.js";
import LoginPage from "./pages/LoginPage.js";
import UnclassifiedBoard from "./pages/Board/UnclassifiedBoard.js";
import LoveBoard from "./pages/Board/LoveBoard.js";
import FunnyBoard from "./pages/Board/FunnyBoard.js";
import SurpriseBoard from "./pages/Board/SurpriseBoard.js";
import SleepyBoard from "./pages/Board/SleepyBoard.js";
import SadBoard from "./pages/Board/SadBoard.js";
import CryBoard from "./pages/Board/CryBoard.js";
import AngryBoard from "./pages/Board/AngryBoard";
import SearchPage from "./pages/SearchPage";
import SignUpPage from "./pages/SignUpPage";
import TopMenu from "./pages/TopMenu";
import app from "./firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [data, setData] = useState([]);
  const [activeMenu, setActiveMenu] = useState("home");
  const dataId = useRef(0);

  // firebase
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();

  // post
  const onCreate = (input) => {
    const created_date = new Date().getTime();
    const newItem = {
      input,
      id: dataId.current,
      created_date,
      love: 0,
      funny: 0,
      surprise: 0,
      sleepy: 0,
      sad: 0,
      cry: 0,
      angry: 0,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onEdit = (targetId, emo) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, [emo]: it[emo] + 1 } : it
      )
    );
  };

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={() => (
          <>
            <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <MainPage activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </>
        )}
      />
      <Route exact path="/login" render={() => <LoginPage />} />
      <Route exact path="/register" render={() => <SignUpPage />} />
      <Route
        exact
        path="/search"
        render={() => (
          <>
            <TopMenu />
            <SearchPage
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              postList={data}
              onEdit={onEdit}
            />
          </>
        )}
      />
      <Route
        exact
        path="/unclassified"
        render={() => (
          <>
            <TopMenu />
            <UnclassifiedBoard
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              onCreate={onCreate}
              postList={data}
              onEdit={onEdit}
            />
          </>
        )}
      />
      <Route
        exact
        path="/love"
        render={() => (
          <>
            <TopMenu />
            <LoveBoard
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              postList={data}
              onEdit={onEdit}
            />
          </>
        )}
      />
      <Route
        exact
        path="/funny"
        render={() => (
          <>
            <TopMenu />
            <FunnyBoard
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              postList={data}
              onEdit={onEdit}
            />
          </>
        )}
      />
      <Route
        exact
        path="/surprise"
        render={() => (
          <>
            <TopMenu />
            <SurpriseBoard
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              postList={data}
              onEdit={onEdit}
            />
          </>
        )}
      />
      <Route
        exact
        path="/sleepy"
        render={() => (
          <>
            <TopMenu />
            <SleepyBoard
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              postList={data}
              onEdit={onEdit}
            />
          </>
        )}
      />
      <Route
        exact
        path="/sad"
        render={() => (
          <>
            <TopMenu />
            <SadBoard
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              postList={data}
              onEdit={onEdit}
            />
          </>
        )}
      />
      <Route
        exact
        path="/cry"
        render={() => (
          <>
            <TopMenu />
            <CryBoard
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              postList={data}
              onEdit={onEdit}
            />
          </>
        )}
      />
      <Route
        exact
        path="/angry"
        render={() => (
          <>
            <TopMenu />
            <AngryBoard
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              postList={data}
              onEdit={onEdit}
            />
          </>
        )}
      />
    </div>
  );
}

export default App;
