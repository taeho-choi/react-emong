import { Link } from "react-router-dom";

const TopMenu = (isLogged, setisLogged) => {
  return (
    <div className="TopMenu">
      <Link to="/">
        <div className="logo">🤐 EMONG</div>
      </Link>
      <Link to="login">
        <button className="loginBtn">로그인</button>
      </Link>
    </div>
  );
};

export default TopMenu;
