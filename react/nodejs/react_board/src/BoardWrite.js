import React from "react";

const BoardWrite = () => {
  return (
    <div>
      <form>
        <table border="1" width="700px" align="center">
          <tr>
            <td width="100px">제목</td>
            <td align="left" width="550px">
              <input
                type="text"
                name="title"
                size="68"
                placeholder="제목을 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">글쓴이</td>
            <td align="left" width="550px">
              <input
                type="text"
                name="writer"
                size="68"
                placeholder="글쓴이를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td align="left">
              <textarea
                rows="5"
                cols="70"
                name="content"
                placeholder="내용을 입력하세요"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input type="button" value="글쓰기"></input>
              &nbsp;
              <input type="reset" value="취소"></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default BoardWrite;
