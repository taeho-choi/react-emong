import { useState, useEffect } from "react";
import PostItem from "./PostItem.js";
import { Link } from "react-router-dom";

const SearchPostList = ({ postList, onEdit, searchText }) => {
  const [resultValue, setResultValue] = useState(0);
  const [data, setData] = useState([]);
  let tempData = [];
  let tempValue = 0;

  useEffect(() => {
    for (let i = 0; i < postList.length; i++) {
      if (postList[i].input.includes(searchText)) {
        tempData.push(postList[i]);
        tempValue++;
      }
    }
    setData(tempData);
    setResultValue(tempValue);
  });

  return (
    <div className="PostList">
      {searchText !== null ? (
        <>
          <div className="resultInfo">
            <a style={{ color: "white" }}>{resultValue}</a>개의 검색 결과가
            존재합니다.
          </div>
        </>
      ) : (
        <></>
      )}
      <p className="line"></p>

      {searchText !== null ? (
        <div>
          {data.map((it) => (
            <PostItem key={it.id} {...it} onEdit={onEdit} />
          ))}
        </div>
      ) : (
        <div>
          <div className="boardInfo">
            다양한 게시판에서 감정들을 확인하세요.
          </div>
          <div className="container">
            <Link to="love">
              <button>
                <a>🥰</a>
                <br />
                사랑 게시판
              </button>
            </Link>
            <Link to="funny">
              <button>
                <a>😂</a>
                <br />
                웃음 게시판
              </button>
            </Link>
            <Link to="surprise">
              <button>
                <a>😲</a>
                <br />
                놀람 게시판
              </button>
            </Link>
            <Link to="sleepy">
              <button>
                <a>🥱</a>
                <br />
                졸림 게시판
              </button>
            </Link>
            <Link to="sad">
              <button>
                <a>😢</a>
                <br />
                슬픔 게시판
              </button>
            </Link>
            <Link to="cry">
              <button>
                <a>😭</a>
                <br />
                눈물 게시판
              </button>
            </Link>
            <Link to="angry">
              <button>
                <a>🤬</a>
                <br />
                분노 게시판
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

SearchPostList.defaultProps = {
  postList: [],
};

export default SearchPostList;
