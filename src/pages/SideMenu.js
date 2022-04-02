import { Link } from "react-router-dom";

const SideMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className="SideMenu">
      <Link to="/">
        <button className={activeMenu === "home" ? "on" : "off"}>🏠　홈</button>
      </Link>
      <Link to="/search">
        <button className={activeMenu === "search" ? "on" : "off"}>
          🔍　검색하기
        </button>
      </Link>
      <button
        className={activeMenu === "info" ? "on" : "off"}
        onClick={() => setActiveMenu("info")}
      >
        🏁　이용 안내
      </button>
      <div className="category">게시판</div>
      <Link to="/unclassified">
        <button className={activeMenu === "Unclassified" ? "on" : "off"}>
          📝　모든 감정
        </button>
      </Link>
      <Link to="/love">
        <button className={activeMenu === "love" ? "on" : "off"}>
          🥰　사랑 게시판
        </button>
      </Link>
      <Link to="/funny">
        <button className={activeMenu === "funny" ? "on" : "off"}>
          😂　웃음 게시판
        </button>
      </Link>
      <Link to="/surprise">
        <button className={activeMenu === "surprise" ? "on" : "off"}>
          😲　놀람 게시판
        </button>
      </Link>
      <Link to="/sleepy">
        <button className={activeMenu === "sleepy" ? "on" : "off"}>
          🥱　졸림 게시판
        </button>
      </Link>
      <Link to="/sad">
        <button className={activeMenu === "sad" ? "on" : "off"}>
          😢　슬픔 게시판
        </button>
      </Link>
      <Link to="/cry">
        <button className={activeMenu === "cry" ? "on" : "off"}>
          😭　눈물 게시판
        </button>
      </Link>
      <Link to="/angry">
        <button className={activeMenu === "angry" ? "on" : "off"}>
          🤬　분노 게시판
        </button>
      </Link>
      <div className="category">고객센터</div>
      <button className={activeMenu === "17" ? "on" : "off"}>
        📚　이용 약관
      </button>
      <button className={activeMenu === "18" ? "on" : "off"}>
        📧　문의하기
      </button>
      <div className="copyright">© EMONG. All Rights Reserved.</div>
    </div>
  );
};

export default SideMenu;
