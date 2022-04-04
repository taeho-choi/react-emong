import React, { useEffect, useState, useRef } from "react";
import SideMenu from "../pages/SideMenu";
import TopMenu from "../pages/TopMenu.js";
import SearchPostList from "../pages/SearchPostList.js";

const SearchPage = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  useEffect(() => {
    setActiveMenu("search");
  }, []);

  const textBox = useRef();
  const [searchText, setSearchText] = useState(null);

  const onSearch = () => {
    setSearchText(textBox.current.value);
    console.log(textBox.current.value);
  };

  return (
    <>
      <TopMenu />
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="SearchPage">
          <div className="searchBox">
            <input
              type="text"
              placeholder="검색할 내용을 입력하세요."
              ref={textBox}
            />
            <button className="searchBtn" onClick={onSearch}>
              🔍
            </button>
          </div>
          <SearchPostList
            postList={postList}
            onEdit={onEdit}
            searchText={searchText}
          />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
