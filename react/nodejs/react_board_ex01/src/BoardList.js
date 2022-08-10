import { useEffect } from "react";
import BoardArticle from "./BoardArticle";

const BoardList = () => {
  if (1) {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th whidth="60">번호</th>
              <th whidth="240">제목</th>
              <th whidth="100">작성자</th>
              <th whidth="100">작성일</th>
              <th whidth="200">수정/삭제</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th whidth="60">번호</th>
              <th whidth="240">제목</th>
              <th whidth="100">작성자</th>
              <th whidth="100">작성일</th>
              <th whidth="200">수정/삭제</th>
            </tr>
          </thead>
          <tbody>
            <BoardArticle />
          </tbody>
        </table>
      </div>
    );
  }
};

export default BoardList;
