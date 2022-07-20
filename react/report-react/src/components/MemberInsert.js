import { useCallback, useState } from 'react';

const MemberInsert = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  //   const { id, password, email, gender } = form;

  //   const onChange = useCallback((e) => {
  //     const nextForm = {
  //       ...form,
  //       [e.target.name]: e.target.value,
  //     };
  //     setForm(nextForm);
  //     console.log([e.target.name] + ':' + e.target.value);
  //   });

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const onChangeGender = useCallback((e) => {
    setGender(e.target.value);
  }, []);

  return (
    <form className="MemberInsert">
      <table>
        <tr>
          <td>아이디</td>
          <td>
            <input type="text" placeholder="아이디를 입력하세요" />
          </td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>
            <input type="text" placeholder="비밀번호를 입력하세요" />
          </td>
        </tr>
        <tr>
          <td>이메일</td>
          <td>
            <input type="email" placeholder="이메일을 입력하세요" />
          </td>
        </tr>
        <tr>
          <td>성별</td>
          <td>
            <input type="radio" name="gender" value="남" />남
            <input type="radio" name="gender" value="여" />여
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
