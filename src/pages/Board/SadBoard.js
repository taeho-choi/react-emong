import React, { useEffect } from "react";
import SideMenu from "../SideMenu.js";
import TopMenu from "../TopMenu.js";
import PostList from "../PostList.js";

const SadBoard = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  useEffect(() => {
    setActiveMenu("sad");
  });

  return (
    <>
      <TopMenu />
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="SadBoard">
          <div className="title">
            😢 슬픔<a>슬픔이 포함된 감정들입니다.</a>
          </div>
          <p className="line"></p>
          <PostList postList={postList} onEdit={onEdit} classifyFlag={"sad"} />
        </div>
      </div>
    </>
  );
};

export default SadBoard;
