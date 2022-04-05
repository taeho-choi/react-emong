import React, { useEffect } from "react";
import SideMenu from "./SideMenu.js";
import { Link } from "react-router-dom";

const MainPage = ({ activeMenu, setActiveMenu }) => {
  useEffect(() => {
    setActiveMenu("home");
  }, []);

  return (
    <>
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="MainPage">
          <div>
            <h1>Welcome to EMONG!</h1>
            <p className="line"></p>
            <h2>😀😁😂🤣😎😍😪</h2>
            <h1>익명의 친구들에게 감정을 공감 받으세요!</h1>
            <Link to="login">
              <button>로그인하고 시작하기</button>
            </Link>
            <h3>※ 로그인하지 않아도 이모지 표현은 가능합니다.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
