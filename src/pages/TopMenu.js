import { useHistory, Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
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

  const [isMenuOn, setIsMenuOn] = useState(false);
  const mobileMenuRef = useRef();

  const onLogOut = () => {
    signOut(getAuth());
  };

  const menuOnToggle = () => {
    if (isMenuOn) {
      mobileMenuRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
    setIsMenuOn((isMenuOn) => !isMenuOn);
  };

  const history = useHistory();
  const onClickBoard = (ref) => {
    setIsMenuOn(false);
    history.replace(`/${ref}`);
  };

  return (
    <div className="TopMenu">
      <div className="NavBar">
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
      </div>

      <div className={isMenuOn ? "isMenuOn" : "isMenuOff"} ref={mobileMenuRef}>
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
        <button
          onClick={() => {
            onClickBoard("unclassified");
          }}
        >
          🏁　이용 안내
        </button>
        <button
          onClick={() => {
            onClickBoard("unclassified");
          }}
        >
          📝　모든 감정
        </button>
        <button
          onClick={() => {
            onClickBoard("love");
          }}
        >
          🥰　사랑 게시판
        </button>
        <button
          onClick={() => {
            onClickBoard("funny");
          }}
        >
          😂　웃음 게시판
        </button>
        <button
          onClick={() => {
            onClickBoard("surprise");
          }}
        >
          😲　놀람 게시판
        </button>
        <button
          onClick={() => {
            onClickBoard("sleepy");
          }}
        >
          🥱　졸림 게시판
        </button>
        <button
          onClick={() => {
            onClickBoard("sad");
          }}
        >
          😢　슬픔 게시판
        </button>
        <button
          onClick={() => {
            onClickBoard("cry");
          }}
        >
          😭　눈물 게시판
        </button>
        <button
          onClick={() => {
            onClickBoard("angry");
          }}
        >
          🤬　분노 게시판
        </button>
        <button
          onClick={() => {
            onClickBoard("unclassified");
          }}
        >
          📚　이용 약관
        </button>
        <button
          onClick={() => {
            onClickBoard("unclassified");
          }}
        >
          📧　문의하기
        </button>
        {/* {} */}
        <div className="mobileCopyright"></div>
      </div>
    </div>
  );
};

export default TopMenu;
