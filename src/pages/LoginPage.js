import React from "react";
import SideMenu from "./SideMenu.js";
import TopMenu from "./TopMenu.js";

const LoginPage = ({ activeMenu, setActiveMenu }) => {
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
