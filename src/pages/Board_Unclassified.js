import React, { useEffect, useRef, useState } from "react";
import SideMenu from "./SideMenu.js";
import TopMenu from "./TopMenu.js";
import PostList from "./PostList.js";

const Board_Unclassified = ({
  activeMenu,
  setActiveMenu,
  onCreate,
  postList,
}) => {
  useEffect(() => {
    setActiveMenu("Unclassified");
  });

  const input = useRef();
  const [state, setState] = useState("");

  const handleChangeState = (e) => {
    const { value } = e.target;
    setState(value.slice(0, 300));
    console.log(value);
  };

  const handleSubmit = () => {
    if (state.length < 10) {
      alert("내용은 10글자 이상으로 작성해주세요.");
      input.current.focus();
      return;
    }

    onCreate(state);
    setState("");
  };

  return (
    <>
      <TopMenu />
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="Board_Unclassified">
          <div className="title">📝 미분류 게시판</div>
          <p className="line"></p>
          <textarea
            ref={input}
            value={state}
            onChange={handleChangeState}
            maxlength={300}
            placeholder="내용을 10글자 이상으로 작성해주세요."
          ></textarea>
          <button className="submit" onClick={handleSubmit}>
            작성하기
          </button>
          <div className="letters">{state.length} / 300 자</div>
          <PostList postList={postList} />
        </div>
      </div>
    </>
  );
};

export default Board_Unclassified;
