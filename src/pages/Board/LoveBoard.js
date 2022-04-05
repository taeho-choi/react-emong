import React, { useEffect } from "react";
import SideMenu from "../SideMenu.js";
import PostList from "../PostList.js";

const LoveBoard = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  useEffect(() => {
    setActiveMenu("love");
  }, []);

  return (
    <>
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="LoveBoard">
          <div className="title">
            🥰 사랑<a>사랑이 포함된 감정들입니다.</a>
          </div>
          <p className="line"></p>
          <PostList postList={postList} onEdit={onEdit} classifyFlag={"love"} />
        </div>
      </div>
    </>
  );
};

export default LoveBoard;
