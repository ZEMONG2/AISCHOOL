import { useState } from "react";

var hobbyArr = "";
const FormInput = () => {
  const [form, setForm] = useState({
    id: "",
    pw1: "",
    jumin1: "",
    jumin2: "",
    tel1: "",
    tel2: "",
    tel3: "",
    intro: "",
    gender: "",
    email1: "",
    email2: "",
  });
  const {
    id,
    pw1,
    jumin1,
    jumin2,
    tel1,
    tel2,
    tel3,
    intro,
    gender,
    email1,
    email2,
  } = form;

  const onChangeHobbyArr = (e) => {
    hobbyArr += e.target.value + " ";

    console.log(hobbyArr);
  };
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);

    console.log([e.target.name] + ":" + e.target.value);
  };

  const onClick = () => {
    alert(
      `id: ${id}\npw: ${pw1}\njumin: ${jumin1}-${jumin2}\ngender: ${gender}\nphone: ${tel1}-${tel2}-${tel3}\nemail: ${email1}@${email2}\nhobby: ${hobbyArr}\nintro: ${intro}\n`
    );

    setForm({
      id: "",
      password: "",
      jumin1: "",
      jumin2: "",
      tel1: "",
      tel2: "",
      tel3: "",
      intro: "",
      email1: "",
      email2: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <form name="input_form" method="post">
      <table align="center" border="1">
        <thead></thead>
        <tbody>
          <tr>
            <td width="110">아이디</td>
            <td width="400">
              <input
                type="text"
                name="id"
                size="30"
                required
                placeholder="최소6~최대10, 숫자와알파벳만 사용"
                value={id}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td width="110">비밀번호</td>
            <td width="400">
              <input
                type="password"
                name="pw1"
                size="30"
                placeholder="최소6~최대10, 숫자와알파벳만 사용"
                value={pw1}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td width="110">비밀번호 확인</td>
            <td width="400">
              <input
                type="password"
                name="pw2"
                size="30"
                placeholder="최소6~최대10, 숫자와알파벳만 사용"
              />
            </td>
          </tr>
          <tr>
            <td width="110">주민번호</td>
            <td width="400">
              <input
                type="text"
                name="jumin1"
                size="6"
                maxLength="6"
                value={jumin1}
                onChange={onChange}
              />
              -
              <input
                type="text"
                name="jumin2"
                size="7"
                maxLength="7"
                value={jumin2}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td width="110">성별</td>
            <td width="400">
              <input
                type="radio"
                name="gender"
                value="남자"
                onChange={onChange}
              />
              남자
              <input
                type="radio"
                name="gender"
                value="여자"
                onChange={onChange}
              />
              여자
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                type="tel"
                name="tel1"
                size="3"
                maxLength="3"
                value={tel1}
                onChange={onChange}
              />
              -
              <input
                type="tel"
                name="tel2"
                size="4"
                maxLength="4"
                value={tel2}
                onChange={onChange}
              />
              -
              <input
                type="tel"
                name="tel3"
                size="4"
                maxLength="4"
                value={tel3}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td width="110">이메일</td>
            <td width="400">
              <input
                type="text"
                name="email1"
                size="10"
                value={email1}
                onChange={onChange}
              />
              @
              <select name="email2" value={email2} onChange={onChange}>
                <option value="">메일주소선택</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="naver.com">naver.com</option>
                <option value="nate.com">nate.com</option>
              </select>
            </td>
          </tr>
          <tr>
            <td width="110">취미</td>
            <td width="400">
              <input
                type="checkbox"
                name="hobby"
                value="등산"
                onChange={onChangeHobbyArr}
              />
              등산
              <input
                type="checkbox"
                name="hobby"
                value="독서"
                onChange={onChangeHobbyArr}
              />
              독서
              <input
                type="checkbox"
                name="hobby"
                value="스키"
                onChange={onChangeHobbyArr}
              />
              스키
              <input
                type="checkbox"
                name="hobby"
                value="음악"
                onChange={onChangeHobbyArr}
              />
              음악
              <input
                type="checkbox"
                name="hobby"
                value="영화"
                onChange={onChangeHobbyArr}
              />
              영화
            </td>
          </tr>
          <tr>
            <td width="110">자기소개</td>
            <td width="400">
              <textarea
                name="intro"
                rows="5"
                cols="50"
                value={intro}
                onChange={onChange}
                onKeyPress={onKeyPress}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center" width="500">
              <input type="button" value="입력" onClick={onClick} />
              <input type="reset" name="reset" value="취소" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
export default FormInput;
