import React, { useEffect } from "react";
import SideMenu from "../SideMenu.js";
import PostList from "../PostList.js";

const FunnyBoard = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  useEffect(() => {
    setActiveMenu("funny");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="FunnyBoard">
          <div className="title">
            😂 웃음<a>웃음이 포함된 감정들입니다.</a>
          </div>
          <p className="line"></p>
          <PostList
            postList={postList}
            onEdit={onEdit}
            classifyFlag={"funny"}
          />
        </div>
      </div>
    </>
  );
};

export default FunnyBoard;
