import React from "react";
import SideMenu from "./SideMenu.js";
import TopMenu from "./TopMenu.js";

const MainPage = () => {
  return (
    <>
      <TopMenu />
      <SideMenu />
      <div className="MainPage">
        <h1>홈</h1>
        <p className="line"></p>
        <img src="img/img1.jpg" alt="img"></img>{" "}
        <img src="img/img1.jpg" alt="img"></img>{" "}
        <img src="img/img1.jpg" alt="img"></img>{" "}
        <img src="img/img1.jpg" alt="img"></img>{" "}
        <img src="img/img1.jpg" alt="img"></img>{" "}
        <img src="img/img1.jpg" alt="img"></img>{" "}
        <img src="img/img1.jpg" alt="img"></img>{" "}
        <img src="img/img1.jpg" alt="img"></img>
      </div>
    </>
  );
};

export default MainPage;
