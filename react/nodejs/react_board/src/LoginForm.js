import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("아이디를 입력하세요!!!");
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("패스워드를 입력하세요!!!");
      pwRef.current.focus();
      return false;
    }

    console.log(
      "LoginForm:window.sessionStorage(login_id) =>",
      window.sessionStorage.getItem("id")
    );

    axios
      .post("http://localhost:8008/login", {
        id: idRef.current.value,
        pw: pwRef.current.value,
      })
      .then((res) => {
        console.log("handleLogin =>", res);
        console.log(idRef.current.value);
        if (res.data[0].CNT === 1) {
          window.sessionStorage.setItem("id", idRef.current.value);
          navigate("/main");
        } else {
          navigate("/");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleMemberForm = () => {
    navigate("/member");
  };

  return (
    <div>
      <p></p>
      <form>
        <table border="1" width="300px" align="center">
          <tr>
            <td width="100px">아이디</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="id"
                size="20"
                defaultValue=""
                ref={idRef}
                placeholder="아이디를 입력하세요"
              />
            </td>
          </tr>
          <tr>
            <td width="100px">패스워드</td>
            <td align="left" width="200px">
              <input
                type="password"
                name="pw"
                size="20"
                defaultValue=""
                ref={pwRef}
                placeholder="패스워드를 입력하세요"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input type="button" value="로그인" onClick={handleLogin} />
              &nbsp;
              <input
                type="button"
                value="회원등록"
                onClick={handleMemberForm}
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default LoginForm;
