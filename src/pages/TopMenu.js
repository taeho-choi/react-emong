import { Link } from "react-router-dom";
import React, { useEffect } from "react";
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

  const onLogOut = () => {
    signOut(getAuth());
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
    </div>
  );
};

export default TopMenu;
