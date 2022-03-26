import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <div className="TopMenu">
      <Link to="/">
        <div className="logo">🤐 EMONG</div>
      </Link>
      <button className="loginBtn">로그인</button>
    </div>
  );
};

export default TopMenu;
