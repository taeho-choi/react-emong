import React, { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const onLogin = async () => {
    const auth = getAuth();
    const result = await createUserWithEmailAndPassword(
      auth,
      idRef.current.value,
      pwRef.current.value
    );
    // console.log(result);
  };

  const onPressEnter = (e) => {
    if (e.key == "Enter") {
      onLogin();
    }
  };

  return (
    <div className="SignUpPage">
      <div className="box">
        <div className="title">EMONG 회원가입</div>
        <div className="subTitle">
          EMONG 계정으로 모든 서비스 이용이 가능합니다.
        </div>
        <div className="info">아이디</div>
        <input
          placeholder="이메일 형식 (example@abc.de)"
          ref={idRef}
          onKeyPress={onPressEnter}
        ></input>
        <a className="findAccount"></a>
        <div className="info">비밀번호</div>

        <input
          placeholder="영문+숫자 조합"
          type={"password"}
          ref={pwRef}
          onKeyPress={onPressEnter}
        ></input>
        <button className="signUpBtn" onClick={onLogin}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
