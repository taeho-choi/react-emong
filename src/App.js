import "./App.css";
import Menu from "./Menu.js";
import Board from "./Board.js";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState("main");

  return (
    <div className="App">
      <Menu />
      <Board page={board} />
    </div>
  );
}

export default App;
