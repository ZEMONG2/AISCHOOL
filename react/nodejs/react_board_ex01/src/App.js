import BoardList from "./BoardList";
import BoardArticle from "./BoardArticle";
import BoardWrite from "./BoardWrite";
import BoardDetail from "./BoardDetail";
import BoardUpdateForm from "./BoardUpdateForm";
import { useState } from "react";

function App() {
  // 0:글쓰기, 1:상세정보, 2:글수정
  const [actionMode, setactionMode] = useState({ mode: 0 });

  if (actionMode.mode === 0) {
    return (
      <div>
        <BoardWrite />
        <br />
        <BoardList />
      </div>
    );
  } else if (actionMode.mode === 1) {
    return (
      <div>
        <BoardDetail />
        <br />
        <BoardList />
      </div>
    );
  } else if (actionMode.mode === 2) {
    return (
      <div>
        <BoardUpdateForm />
        <br />
        <BoardList />
      </div>
    );
  }
}

export default App;
