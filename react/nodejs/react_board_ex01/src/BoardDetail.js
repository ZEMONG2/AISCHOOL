const BoardDetail = () => {
  return (
    <div>
      <form>
        <table width="700px" border="1" align="center">
          <tr>
            <td whidth="100px">글번호</td>
            <td align="left" width="600px">
              board_num
            </td>
          </tr>
          <tr>
            <td whidth="100px">제목</td>
            <td align="left" width="600px">
              board_title
            </td>
          </tr>
          <tr>
            <td whidth="100px">글쓴이</td>
            <td align="left" width="600px">
              board_writer
            </td>
          </tr>
          <tr>
            <td whidth="100px">글쓴날짜</td>
            <td align="left" width="600px">
              board_date
            </td>
          </tr>
          <tr>
            <td whidth="100px">글내용</td>
            <td align="left" width="600px">
              board_content
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input type="button" value="글목록" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default BoardDetail;
