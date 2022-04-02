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

function App() {
  const [data, setData] = useState([]);
  const [activeMenu, setActiveMenu] = useState("home");
  const dataId = useRef(0);

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
      <Route
        exact
        path="/search"
        render={() => (
          <SearchPage
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            postList={data}
            onEdit={onEdit}
          />
        )}
      />
      <Route
        exact
        path="/unclassified"
        render={() => (
          <UnclassifiedBoard
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            onCreate={onCreate}
            postList={data}
            onEdit={onEdit}
          />
        )}
      />
      <Route
        exact
        path="/love"
        render={() => (
          <LoveBoard
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            postList={data}
            onEdit={onEdit}
          />
        )}
      />
      <Route
        exact
        path="/funny"
        render={() => (
          <FunnyBoard
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            postList={data}
            onEdit={onEdit}
          />
        )}
      />
      <Route
        exact
        path="/surprise"
        render={() => (
          <SurpriseBoard
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            postList={data}
            onEdit={onEdit}
          />
        )}
      />
      <Route
        exact
        path="/sleepy"
        render={() => (
          <SleepyBoard
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            postList={data}
            onEdit={onEdit}
          />
        )}
      />
      <Route
        exact
        path="/sad"
        render={() => (
          <SadBoard
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            postList={data}
            onEdit={onEdit}
          />
        )}
      />
      <Route
        exact
        path="/cry"
        render={() => (
          <CryBoard
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            postList={data}
            onEdit={onEdit}
          />
        )}
      />
      <Route
        exact
        path="/angry"
        render={() => (
          <AngryBoard
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            postList={data}
            onEdit={onEdit}
          />
        )}
      />
    </div>
  );
}

export default App;
