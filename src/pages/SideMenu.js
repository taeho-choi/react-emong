import { Link } from "react-router-dom";

const SideMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className="SideMenu">
      <Link to="/">
        <button className={activeMenu === "home" ? "on" : "off"}>🏠　홈</button>
      </Link>
      <button className={activeMenu === "search" ? "on" : "off"}>
        🔍　검색하기
      </button>
      <button
        className={activeMenu === "info" ? "on" : "off"}
        onClick={() => setActiveMenu("info")}
      >
        🏁　이용 안내
      </button>
      <div className="category">게시판</div>
      <Link to="/unclassified">
        <button className={activeMenu === "Unclassified" ? "on" : "off"}>
          📝　Unclassified
        </button>
      </Link>
      <button
        className={activeMenu === "3" ? "on" : "off"}
        onClick={() => setActiveMenu("3")}
      >
        🐺　늑대 게시판
      </button>
      <button
        className={activeMenu === "4" ? "on" : "off"}
        onClick={() => setActiveMenu("4")}
      >
        🦊　여우 게시판
      </button>
      <button
        className={activeMenu === "5" ? "on" : "off"}
        onClick={() => setActiveMenu("5")}
      >
        🦝　너구리 게시판
      </button>
      <button
        className={activeMenu === "6" ? "on" : "off"}
        onClick={() => setActiveMenu("6")}
      >
        🐱　고양이 게시판
      </button>
      <button
        className={activeMenu === "7" ? "on" : "off"}
        onClick={() => setActiveMenu("7")}
      >
        🦁　사자 게시판
      </button>
      <button
        className={activeMenu === "8" ? "on" : "off"}
        onClick={() => setActiveMenu("8")}
      >
        🐯　호랑이 게시판
      </button>
      <button
        className={activeMenu === "9" ? "on" : "off"}
        onClick={() => setActiveMenu("9")}
      >
        🐷　돼지 게시판
      </button>
      <button
        className={activeMenu === "10" ? "on" : "off"}
        onClick={() => setActiveMenu("10")}
      >
        🐸　개구리 게시판
      </button>
      <button
        className={activeMenu === "11" ? "on" : "off"}
        onClick={() => setActiveMenu("11")}
      >
        🐼　판다 게시판
      </button>
      <button
        className={activeMenu === "12" ? "on" : "off"}
        onClick={() => setActiveMenu("12")}
      >
        🐨　코알라 게시판
      </button>
      <button
        className={activeMenu === "13" ? "on" : "off"}
        onClick={() => setActiveMenu("13")}
      >
        🐻　곰 게시판
      </button>
      <button
        className={activeMenu === "14" ? "on" : "off"}
        onClick={() => setActiveMenu("14")}
      >
        🐰　토끼 게시판
      </button>
      <button
        className={activeMenu === "15" ? "on" : "off"}
        onClick={() => setActiveMenu("15")}
      >
        🐹　햄스터 게시판
      </button>
      <button
        className={activeMenu === "16" ? "on" : "off"}
        onClick={() => setActiveMenu("16")}
      >
        🐗　멧돼지 게시판
      </button>
      <div className="category">고객센터</div>
      <button
        className={activeMenu === "17" ? "on" : "off"}
        onClick={() => setActiveMenu("17")}
      >
        📚　이용 약관
      </button>
      <button
        className={activeMenu === "18" ? "on" : "off"}
        onClick={() => setActiveMenu("18")}
      >
        📧　문의하기
      </button>
      <div className="copyright">© EMONG. All Rights Reserved.</div>
    </div>
  );
};

export default SideMenu;
