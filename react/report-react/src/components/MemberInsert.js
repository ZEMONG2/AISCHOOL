import { useCallback, useState } from 'react';

const MemberInsert = ({ onInsert, onUpdate }) => {
  const [form, setForm] = useState({
    idx: '',
    id: '',
    password: '',
    email: '',
    gender: '',
  });

  // checked: !form.checked,
  const onChange = useCallback(
    (e) => {
      const nextForm = {
        ...form,
        [e.target.name]: e.target.value,
      };
      // setForm(nextForm.filter(([e.target.name] === 'gender') !== checked));

      setForm(nextForm);
      console.log(nextForm);
    },
    [form],
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(form);
      const formDatas = {
        idx: '',
        id: '',
        password: '',
        email: '',
        gender: '',
        checked: false,
      };

      // formDatas.filter((formData) => formData.checked !== false);
      // e.target.input.prop('checked', false);
      setForm(formDatas);
      e.preventDefault();
    },
    [onInsert, form],
  );

  const { idx, id, password, email, gender, checked } = form;

  return (
    <form className="MemberInsert" onSubmit={onSubmit}>
      <table>
        <tr>
          <td>아이디</td>
          <td>
            <input
              type="text"
              name="id"
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={onChange}
            />
          </td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>
            <input
              type="text"
              name="password"
              value={password}
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
              name="email"
              value={email}
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
