import { useCallback, useState, useRef, useEffect } from 'react';

const MemberInsert = ({ values, onInsert }) => {
  const inputRef = useRef([]);
  const [form, setForm] = useState({
    idx: '',
    id: '',
    password: '',
    email: '',
    gender: '',
  });
  // checked: !form.checked,
  console.log(values);

  const inputChange = (e) => {
    // inputRef.current[0].value = values.id;
    // inputRef.current[1].value = values.password;
    // inputRef.current[2].value = values.email;
    // //  inputRef.current[3].value= values.id;
    // //  inputRef.current[4].value= values.id;
    const nextForm = {
      ...form,
      idx: values.idx,
      id: values.id,
      password: values.password,
      email: values.email,
      gender: values.gender,
    };
    // setForm(nextForm.filter(([e.target.name] === 'gender') !== checked));
    if (inputRef.current[3].value === values.gender) {
      inputRef.current[3].checked = true;
    } else if (inputRef.current[4].value === values.gender) {
      inputRef.current[4].checked = true;
    }
    setForm(nextForm);
  };

  useEffect(inputChange, [values]);

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
        gender: e.target.reset(),
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
              ref={(ref) => (inputRef.current[0] = ref)}
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
              ref={(ref) => (inputRef.current[1] = ref)}
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
              type="text"
              name="email"
              ref={(ref) => (inputRef.current[2] = ref)}
              value={email}
              placeholder="이메일을 입력하세요"
              onChange={onChange}
            />
          </td>
        </tr>
        <tr>
          <td>성별</td>
          <td>
            <input
              type="radio"
              name="gender"
              value="남"
              onChange={onChange}
              ref={(ref) => (inputRef.current[3] = ref)}
            />
            남
            <input
              type="radio"
              name="gender"
              value="여"
              onChange={onChange}
              ref={(ref) => (inputRef.current[4] = ref)}
            />
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
