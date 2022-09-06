import axios from "axios";

import React from "react";

const BoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform,
}) => {
  const handleDelete = (e) => {
    console.log("handleDelete(board_num) =>", e.target.id);
    axios
      .post("http://localhost:8008/delete", {
        num: e.target.id,
      })
      .then(() => {
        handlelist();
      })
      .catch((e) => {
        console.error(e);
      });
  };
  console.log("BoardArticle =>", article);
  return (
    <tr>
      <td>{article.BOARD_NUM}</td>
      <td>
        <a href="#" id={article.BOARD_NUM} onClick={handledetail}>
          {article.BOARD_TITLE}
        </a>
      </td>
      <td>{article.BOARD_WRITER}</td>
      <td>{article.BOARD_DATE}</td>
      <td align="center">
        <input
          type="button"
          value="수정"
          id={article.BOARD_NUM}
          onClick={handleupdateform}
        ></input>
        <input
          type="button"
          value="삭제"
          id={article.BOARD_NUM}
          onClick={handleDelete}
        ></input>
      </td>
    </tr>
  );
};

export default BoardArticle;
