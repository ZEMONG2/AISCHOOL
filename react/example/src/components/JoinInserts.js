import { useState, useRef } from "react";

const JoinInserts = ({ onInsert, form, onUpdate }) => {
  console.log("JoinInserts(form)", form);

  var [value, setValue] = useState({});

  const idRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const formRef = useRef();

  const setFormData = () => {
    if (form.num !== undefined) {
      value.num = form.num;
    }
    value.id = idRef.current.value;
    value.password = passwordRef.current.value;
    value.email = emailRef.current.value;
    value.gender = genderRef.current.checked === true ? "여자" : "남자";
  };

  const onClick = (e) => {
    setFormData();
    if (form.num === undefined) {
      onInsert(value);
    } else {
      onUpdate(value);
    }
    setValue({
      num: 0,
      id: "",
      password: "",
      email: "",
      gender: "",
    });
    formRef.current.reset();
    e.preventDefault();
  };

  return (
    <div>
      <form className="JoinInserts" ref={formRef}>
        <table border="1">
          <tbody>
            <tr>
              <td width="110px">아이디</td>
              <td width="440px">
                <input
                  type="text"
                  name="id"
                  defaultValue={form.id !== undefined ? form.id : ""}
                  ref={idRef}
                />
              </td>
            </tr>
            <tr>
              <td width="110px">비밀번호</td>
              <td width="440px">
                <input
                  type="password"
                  name="password"
                  defaultValue={
                    form.password !== undefined ? form.password : ""
                  }
                  ref={passwordRef}
                />
              </td>
            </tr>
            <tr>
              <td width="110px">이메일</td>
              <td width="440px">
                <input
                  type="email"
                  name="email"
                  defaultValue={form.email !== undefined ? form.email : ""}
                  ref={emailRef}
                />
              </td>
            </tr>
            <tr>
              <td width="110px">성별</td>
              <td>
                남자
                <input
                  type="radio"
                  value="남자"
                  name="gender"
                  defaultChecked={
                    form.num !== undefined && form.gender === "남자"
                  }
                  ref={genderRef}
                />
                여자
                <input
                  type="radio"
                  value="여자"
                  name="gender"
                  defaultChecked={
                    form.num !== undefined && form.gender === "여자"
                  }
                  ref={genderRef}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <input
                  type="button"
                  name="btn"
                  value="등록"
                  onClick={onClick}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="app-title">회원 정보</div>
    </div>
  );
};

export default JoinInserts;
