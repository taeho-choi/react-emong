import { Link } from "react-router-dom";

const SideMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className="SideMenu">
      <Link to="/">
        <button className={activeMenu === "home" ? "on" : "off"}>π γν</button>
      </Link>
      <Link to="/search">
        <button className={activeMenu === "search" ? "on" : "off"}>
          πγκ²μνκΈ°
        </button>
      </Link>
      <button
        className={activeMenu === "info" ? "on" : "off"}
        onClick={() => setActiveMenu("info")}
      >
        πγμ΄μ© μλ΄
      </button>
      <div className="category">κ²μν</div>
      <Link to="/unclassified">
        <button className={activeMenu === "Unclassified" ? "on" : "off"}>
          πγλͺ¨λ  κ°μ 
        </button>
      </Link>
      <Link to="/love">
        <button className={activeMenu === "love" ? "on" : "off"}>
          π₯°γμ¬λ κ²μν
        </button>
      </Link>
      <Link to="/funny">
        <button className={activeMenu === "funny" ? "on" : "off"}>
          πγμμ κ²μν
        </button>
      </Link>
      <Link to="/surprise">
        <button className={activeMenu === "surprise" ? "on" : "off"}>
          π²γλλ κ²μν
        </button>
      </Link>
      <Link to="/sleepy">
        <button className={activeMenu === "sleepy" ? "on" : "off"}>
          π₯±γμ‘Έλ¦Ό κ²μν
        </button>
      </Link>
      <Link to="/sad">
        <button className={activeMenu === "sad" ? "on" : "off"}>
          π’γμ¬ν κ²μν
        </button>
      </Link>
      <Link to="/cry">
        <button className={activeMenu === "cry" ? "on" : "off"}>
          π­γλλ¬Ό κ²μν
        </button>
      </Link>
      <Link to="/angry">
        <button className={activeMenu === "angry" ? "on" : "off"}>
          π€¬γλΆλΈ κ²μν
        </button>
      </Link>
      <div className="category">κ³ κ°μΌν°</div>
      <button className={activeMenu === "17" ? "on" : "off"}>
        πγμ΄μ© μ½κ΄
      </button>
      <button className={activeMenu === "18" ? "on" : "off"}>
        π§γλ¬ΈμνκΈ°
      </button>
      <div className="copyright">Β© EMONG. All Rights Reserved.</div>
    </div>
  );
};

export default SideMenu;
