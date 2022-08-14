import React, { useEffect } from "react";
import BoardArticle from "./BoardArticle";
import { useNavigate } from "react-router-dom";
import PageLink from "./PageLink";

const BoardList = ({
  boardlist,
  actionmode,
  handlelist,
  handledetail,
  handleupdateform,
  handlepage,
  pagelink,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    handlelist();
  }, []);

  const handleLogout = () => {
    console.log("handleLogout");
    window.sessionStorage.clear();
    console.log(
      "handleLogout:window.sessionStorage(login_id) =>",
      window.sessionStorage.getItem("id")
    );
    navigate("/");
  };

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thread>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100">작성일</th>
              <th width="200">
                수정/삭제
                <input type="button" value="로그아웃" onClick={handleLogout} />
              </th>
            </tr>
          </thread>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100">작성일</th>
              <th width="200">
                수정/삭제
                <input type="button" value="로그아웃" onClick={handleLogout} />
              </th>
            </tr>
          </thead>
          <tbody width="700px">
            {boardlist.boardList.map((article) => {
              return (
                <BoardArticle
                  actionmode={actionmode}
                  article={article}
                  ket={article.board_num}
                  handlelist={handlelist}
                  handledetail={handledetail}
                  handleupdateform={handleupdateform}
                />
              );
            })}
          </tbody>
        </table>
        <table align="center">
          <tr>
            <td>
              {pagelink.map((page) => {
                return (
                  <PageLink page={page} key={page} handlepage={handlepage} />
                );
              })}
            </td>
          </tr>
        </table>
      </div>
    );
  }
};
export default BoardList;
