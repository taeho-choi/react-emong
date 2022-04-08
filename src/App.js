import React, { useState, useRef, useEffect } from "react";
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
import db from "./firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";

function App() {
  useEffect(() => {
    initData();
  }, []);

  const [data, setData] = useState([]);
  const [activeMenu, setActiveMenu] = useState("home");
  const dataId = useRef(0);

  // firebase
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // firestore
  const initData = async () => {
    const querySnapshot = await getDocs(collection(db, "board"));
    const articleSnapshot = await getDocs(
      query(collection(db, "board"), orderBy("created_date"))
    );

    dataId.current = 0;
    articleSnapshot.forEach((doc) => {
      setData((prevData) => [doc.data(), ...prevData]);
      dataId.current += 1;
    });

    // const docRef = collection(db, "board");
    // // const docSnap = await getDoc(docRef);

    // console.log(docRef);
  };

  // post

  // Local onCreate
  const prevOnCreate = (input) => {
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

  // Firestore onCreate
  const onCreate = async (input) => {
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
    console.log(`onCreate :: ${dataId.current}`);

    await setDoc(doc(db, "board", dataId.current.toString()), newItem);
    setData([]);
    initData();
  };

  // Firestore onEdit
  const onEdit = async (targetId, emo) => {
    const targetRef = doc(db, "board", (targetId + 1).toString());
    await updateDoc(targetRef, {
      [emo]: (await getDoc(targetRef)).data()[emo] + 1,
    }).then(() => {
      setData(
        data.map((it) =>
          it.id === targetId ? { ...it, [emo]: it[emo] + 1 } : it
        )
      );
    });
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
            <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
            <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
            <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
            <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
            <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
            <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
            <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
            <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
            <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
