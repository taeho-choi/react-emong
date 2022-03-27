import React, { useState, useRef } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage.js";
import LoginPage from "./pages/LoginPage.js";
import Board_Unclassified from "./pages/Board_Unclassified";

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

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
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
        path="/unclassified"
        render={() => (
          <Board_Unclassified
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            onCreate={onCreate}
            postList={data}
            onEdit={onEdit}
          />
        )}
      />
    </div>
  );
}

export default App;
