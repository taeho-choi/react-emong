const Menu = () => {
  return (
    <aside className="Menu">
      <div className="login">
        <img id="logo" src="img/alien_emoji.png" alt="logo"></img>
        <button className="btn" id="btn1">
          로그인
        </button>
        <button className="btn" id="btn2">
          오티엘플래닛 회원가입
        </button>
        <p id="find_account">아이디/비밀번호 찾기</p>
      </div>
    </aside>
  );
};

export default Menu;
