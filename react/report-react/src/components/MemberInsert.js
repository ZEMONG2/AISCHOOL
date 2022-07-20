import { useCallback, useState } from 'react';

const MemberInsert = () => {
  const [form, setForm] = useState({
    id: '',
    password: '',
    email: '',
    gender: '',
  });

  const onChange = useCallback(
    (e) => {
      const nextForm = {
        ...form,
        [e.target.name]: e.target.value,
      };
      setForm(nextForm);

      console.log([e.target.name] + ':' + e.target.value);
    },
    [form],
  );
  const { id, password, email, gender } = form;

  return (
    <form className="MemberInsert">
      <table>
        <tr>
          <td>아이디</td>
          <td>
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              onChange={onChange}
            />
          </td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>
            <input
              type="text"
              placeholder="비밀번호를 입력하세요"
              onChange={onChange}
            />
          </td>
        </tr>
        <tr>
          <td>이메일</td>
          <td>
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              onChange={onChange}
            />
          </td>
        </tr>
        <tr>
          <td>성별</td>
          <td>
            <input type="radio" name="gender" value="남" onChange={onChange} />
            남
            <input type="radio" name="gender" value="여" onChange={onChange} />
            여
          </td>
        </tr>
        <tr>
          <td colSpan="2" align="center">
            <button type="submit">등록</button>
          </td>
        </tr>
      </table>
    </form>
  );
};

export default MemberInsert;
