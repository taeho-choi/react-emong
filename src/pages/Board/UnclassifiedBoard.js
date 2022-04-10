import React, { useEffect, useRef, useState } from "react";
import SideMenu from "../SideMenu.js";
import PostList from "../PostList.js";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import db from "../../firestore.js";

const UnclassifiedBoard = ({
  activeMenu,
  setActiveMenu,
  onCreate,
  postList,
  onEdit,
}) => {
  useEffect(() => {
    setActiveMenu("Unclassified");
    window.scrollTo(0, 0);
  }, []);

  const input = useRef();
  const [state, setState] = useState("");

  const handleChangeState = (e) => {
    const { value } = e.target;
    setState(value.slice(0, 300));
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
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="UnclassifiedBoard">
          <div className="title">📝 모든 감정</div>
          <p className="line"></p>
          <div className="writeForm">
            <textarea
              ref={input}
              value={state}
              onChange={handleChangeState}
              maxLength={300}
              placeholder="내용을 10글자 이상으로 작성해주세요."
            ></textarea>
            <button className="submit" onClick={handleSubmit}>
              작성하기
            </button>
            <div className="letters">{state.length} / 300 자</div>
          </div>
          <PostList
            postList={postList}
            onEdit={onEdit}
            classifyFlag={"unclassify"}
          />
        </div>
      </div>
    </>
  );
};

export default UnclassifiedBoard;
