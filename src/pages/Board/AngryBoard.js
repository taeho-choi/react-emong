import React, { useEffect } from "react";
import SideMenu from "../SideMenu.js";
import TopMenu from "../TopMenu.js";
import PostList from "../PostList.js";

const AngryBoard = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  useEffect(() => {
    setActiveMenu("angry");
    console.log("앵그리 액티브");
  }, []);

  return (
    <>
      <TopMenu />
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="AngryBoard">
          <div className="title">
            🤬 분노<a>분노가 포함된 감정들입니다.</a>
          </div>
          <p className="line"></p>
          <PostList
            postList={postList}
            onEdit={onEdit}
            classifyFlag={"angry"}
          />
        </div>
      </div>
    </>
  );
};

export default AngryBoard;
