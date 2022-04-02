import React, { useEffect } from "react";
import SideMenu from "../pages/SideMenu";
import TopMenu from "../pages/TopMenu.js";
import PostList from "../pages/PostList.js";

const SearchPage = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  useEffect(() => {
    setActiveMenu("search");
  });

  return (
    <>
      <TopMenu />
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="SearchPage">
          <div className="searchBox">
            <input placeholder="검색할 내용을 입력하세요." />
            <div className="searchBtn">🔍</div>
          </div>
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

export default SearchPage;
