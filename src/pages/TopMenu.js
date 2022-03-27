import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <div className="TopMenu">
      <Link to="/">
        <div className="logo">🤐 EMONG</div>
      </Link>
      <button
        className="loginBtn"
        onClick={() => {
          alert("현재는 로그인 없이 모든 서비스를 이용하실 수 있습니다.");
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default TopMenu;
