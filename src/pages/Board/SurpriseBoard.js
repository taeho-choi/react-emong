import React, { useEffect } from "react";
import SideMenu from "../SideMenu.js";
import TopMenu from "../TopMenu.js";
import PostList from "../PostList.js";

const SurpriseBoard = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  useEffect(() => {
    setActiveMenu("surprise");
  }, []);

  return (
    <>
      <TopMenu />
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="SurpriseBoard">
          <div className="title">
            😂 놀람<a>놀람이 포함된 감정들입니다.</a>
          </div>
          <p className="line"></p>
          <PostList
            postList={postList}
            onEdit={onEdit}
            classifyFlag={"surprise"}
          />
        </div>
      </div>
    </>
  );
};

export default SurpriseBoard;
