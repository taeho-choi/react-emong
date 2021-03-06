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
          <div className="logo" style={{ color: "#ffc83d" }}>
            π EMONG
          </div>
        </Link>
        {!isLoggedIn ? (
          <Link to="login">
            <button className="loginBtn">λ‘κ·ΈμΈ</button>
          </Link>
        ) : (
          <div className="loginBtn" onClick={onLogOut}>
            {getAuth().currentUser.email}
          </div>
        )}
        <button className="hamburgerBtn" onClick={menuOnToggle}>
          β‘
        </button>
      </div>

      <div className={isMenuOn ? "isMenuOn" : "isMenuOff"} ref={mobileMenuRef}>
        <button
          onClick={() => {
            onClickBoard("");
          }}
        >
          π γν
        </button>
        <button
          onClick={() => {
            onClickBoard("search");
          }}
        >
          πγκ²μνκΈ°
        </button>
        <button
          onClick={() => {
            onClickBoard("");
          }}
        >
          πγμ΄μ© μλ΄
        </button>
        <button
          onClick={() => {
            onClickBoard("unclassified");
          }}
        >
          πγλͺ¨λ  κ°μ 
        </button>
        <button
          onClick={() => {
            onClickBoard("love");
          }}
        >
          π₯°γμ¬λ κ²μν
        </button>
        <button
          onClick={() => {
            onClickBoard("funny");
          }}
        >
          πγμμ κ²μν
        </button>
        <button
          onClick={() => {
            onClickBoard("surprise");
          }}
        >
          π²γλλ κ²μν
        </button>
        <button
          onClick={() => {
            onClickBoard("sleepy");
          }}
        >
          π₯±γμ‘Έλ¦Ό κ²μν
        </button>
        <button
          onClick={() => {
            onClickBoard("sad");
          }}
        >
          π’γμ¬ν κ²μν
        </button>
        <button
          onClick={() => {
            onClickBoard("cry");
          }}
        >
          π­γλλ¬Ό κ²μν
        </button>
        <button
          onClick={() => {
            onClickBoard("angry");
          }}
        >
          π€¬γλΆλΈ κ²μν
        </button>
        <button
          onClick={() => {
            onClickBoard("unclassified");
          }}
        >
          πγμ΄μ© μ½κ΄
        </button>
        <button
          onClick={() => {
            onClickBoard("");
          }}
        >
          π§γλ¬ΈμνκΈ°
        </button>
        {/* {} */}
        <div className="mobileCopyright"></div>
      </div>
    </div>
  );
};

export default TopMenu;
