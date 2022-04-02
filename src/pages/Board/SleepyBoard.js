import React, { useEffect } from "react";
import SideMenu from "../SideMenu.js";
import TopMenu from "../TopMenu.js";
import PostList from "../PostList.js";

const SleepyBoard = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  useEffect(() => {
    setActiveMenu("sleepy");
  });

  return (
    <>
      <TopMenu />
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="SleepyBoard">
          <div className="title">
            😪 졸림<a>졸림이 포함된 감정들입니다.</a>
          </div>
          <p className="line"></p>
          <PostList
            postList={postList}
            onEdit={onEdit}
            classifyFlag={"sleepy"}
          />
        </div>
      </div>
    </>
  );
};

export default SleepyBoard;
