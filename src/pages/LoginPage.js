import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const LoginPage = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const history = useHistory();

  const onSignIn = async () => {
    const auth = getAuth();
    const result = await signInWithEmailAndPassword(
      auth,
      idRef.current.value,
      pwRef.current.value
    );

    history.replace("/");
  };

  const onPressEnter = (e) => {
    if (e.key == "Enter") {
      onSignIn();
    }
  };

  return (
    <div className="LoginPage">
      <div className="box">
        <Link to="/">
          <div className="logo">🤐 EMONG</div>
        </Link>
        <input
          placeholder="아이디"
          ref={idRef}
          onKeyPress={onPressEnter}
        ></input>
        <input
          placeholder="비밀번호"
          type={"password"}
          ref={pwRef}
          onKeyPress={onPressEnter}
        ></input>
        <button className="loginBtn" onClick={onSignIn}>
          로그인
        </button>
        <a className="findAccount">아이디/비밀번호 찾기</a>
        <div className="signUp">
          아직 계정이 없으신가요?
          <Link to="register">
            <a>회원가입</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
