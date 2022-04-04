import React, { useEffect } from "react";
import SideMenu from "./SideMenu.js";
import TopMenu from "./TopMenu.js";

const LoginPage = ({ activeMenu, setActiveMenu }) => {
  useEffect(() => {
    setActiveMenu("1");
  }, []);

  return (
    <>
      <div>
        <TopMenu />
        <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
    </>
  );
};

export default LoginPage;
