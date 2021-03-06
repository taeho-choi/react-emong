import React, { useEffect } from "react";
import SideMenu from "../SideMenu.js";
import PostList from "../PostList.js";

const CryBoard = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  useEffect(() => {
    setActiveMenu("cry");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="CryBoard">
          <div className="title">
            π­ λλ¬Ό<a>λλ¬Όμ΄ ν¬ν¨λ κ°μ λ€μλλ€.</a>
          </div>
          <p className="line"></p>
          <PostList postList={postList} onEdit={onEdit} classifyFlag={"cry"} />
        </div>
      </div>
    </>
  );
};

export default CryBoard;
