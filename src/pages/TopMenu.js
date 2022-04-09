import { useHistory, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const TopMenu = ({ isLoggedIn, setIsLoggedIn }) => {
  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const [isMenuOn, setIsMenuOn] = useState("false");

  const onLogOut = () => {
    signOut(getAuth());
  };

  const menuOnToggle = () => {
    setIsMenuOn((isMenuOn) => !isMenuOn);
  };

  const history = useHistory();
  const onClickBoard = (ref) => {
    history.replace(`/${ref}`);
  };

  return (
    <div className="TopMenu">
      <Link to="/">
        <div className="logo">🤐 EMONG</div>
      </Link>
      {!isLoggedIn ? (
        <Link to="login">
          <button className="loginBtn">로그인</button>
        </Link>
      ) : (
        <div className="loginBtn" onClick={onLogOut}>
          {getAuth().currentUser.email}
        </div>
      )}
      <button className="hamburgerBtn" onClick={menuOnToggle}>
        ≡
      </button>
      {/* {isMenuOn ? (
        <></>
      ) : ( */}
      <div className={isMenuOn ? "isMenuOn" : "isMenuOff"}>
        <button
          onClick={() => {
            onClickBoard("");
          }}
        >
          🏠　홈
        </button>
        <button
          onClick={() => {
            onClickBoard("search");
          }}
        >
          🔍　검색하기
        </button>
        <button>📝　모든 감정</button>
        <button>🥰　사랑 게시판</button>
      </div>
    </div>
  );
};

export default TopMenu;
