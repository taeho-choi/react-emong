import React, { useEffect } from "react";
import SideMenu from "../SideMenu.js";
import PostList from "../PostList.js";

const CryBoard = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  useEffect(() => {
    setActiveMenu("cry");
  }, []);

  return (
    <>
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="CryBoard">
          <div className="title">
            😭 눈물<a>눈물이 포함된 감정들입니다.</a>
          </div>
          <p className="line"></p>
          <PostList postList={postList} onEdit={onEdit} classifyFlag={"cry"} />
        </div>
      </div>
    </>
  );
};

export default CryBoard;
