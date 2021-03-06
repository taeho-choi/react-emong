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
            <h1>
              Welcome to{" "}
              <a style={{ color: "#ffc83d", fontSize: "min(6vw, 40px)" }}>
                EMONG!
              </a>
            </h1>
            <p className="line"></p>
            <h2>ππππ€£ππͺ</h2>
            <h1>μ΅λͺμ μΉκ΅¬λ€μκ² κ°μ μ κ³΅κ° λ°μΌμΈμ!</h1>
            <Link to="login">
              <button>λ‘κ·ΈμΈνκ³  μμνκΈ°</button>
            </Link>
            <h3>β» λ‘κ·ΈμΈνμ§ μμλ μ΄λͺ¨μ§ ννμ κ°λ₯ν©λλ€.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
