const BoardUpdateForm = () => {
  return (
    <div>
      <form>
        <table width="700px" border="1" align="center">
          <tr>
            <td whidth="100px">제목</td>
            <td align="left" width="600px">
              <input
                type="text"
                name="board_title"
                defaultValue="board_title"
              />
            </td>
          </tr>
          <tr>
            <td whidth="100px">글쓴이</td>
            <td align="left" width="600px">
              article.board_writer
            </td>
          </tr>
          <tr>
            <td whidth="100px">글내용</td>
            <td align="left" width="600px">
              <input
                type="text"
                name="board_content"
                defaultValue="board_content"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input type="button" value="글수정" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default BoardUpdateForm;
