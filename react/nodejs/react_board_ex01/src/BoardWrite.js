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
              />
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
              />
            </td>
          </tr>
          <tr>
            <td width="100px">내용</td>
            <td align="left" width="550px">
              <textarea
                rows="10"
                cols="70"
                name="content"
                placeholder="내용을 입력하세요"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input type="button" value="글쓰기" />
              &nbsp;
              <input type="reset" value="취소" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default BoardWrite;
