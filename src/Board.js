const Board = ({ page }) => {
  console.log(page);
  if (page === "main") {
    return <div>메인페이지</div>;
  }
  return <div>노리턴</div>;
};

export default Board;
