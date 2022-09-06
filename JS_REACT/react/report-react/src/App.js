import { useState, useRef, useCallback, useEffect } from 'react';
import MemberTemplate from './components/MemberTemplate';
import MemberInsert from './components/MemberInsert';
import MemberList from './components/MemberList';
import TableModel from './components/TableModel';

const App = () => {
  const [values, setValues] = useState({
    idx: '',
    id: '',
    password: '',
    email: '',
    gender: '',
  });
  const [members, setMembers] = useState([]);
  const nextIdx = useRef(1);

  const [show, setShow] = useState(false);
  const showProps = useCallback(() => {
    if (members.length !== 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  useEffect(showProps, [members]);

  // const onInsert = useCallback(
  //   (form) => {
  //     const member = {
  //       idx: nextIdx.current,
  //       id: form.id,
  //       password: form.password,
  //       email: form.email,
  //       gender: form.gender,
  //     };
  //     console.log(member);
  //     const memberUpdate = members.filter((member) => member.id !== form.id);
  //     console.log('form_id : ' + form.id);
  //     console.log('member.id : ' + member.id);
  //     setMembers(memberUpdate.concat(member));
  //     nextIdx.current += 1;
  //   },
  //   [members],
  // );

  const onInsert = useCallback(
    (form) => {
      const member = {
        idx: nextIdx.current,
        id: form.id,
        password: form.password,
        email: form.email,
        gender: form.gender,
      };
      const oldMember = {
        idx: form.idx,
        id: form.id,
        password: form.password,
        email: form.email,
        gender: form.gender,
      };
      console.log(member);
      // const memberUpdate = members.filter((member) => member.id !== form.id);
      const memberUpdateCheck = members.filter(
        (member) => member.id === form.id,
      );
      if (memberUpdateCheck.length === 0) {
        setMembers(members.concat(member));
        nextIdx.current += 1;
        console.log('체크중입니다.');
      } else if (memberUpdateCheck.length !== 0) {
        console.log('old : ' + oldMember);
        const arr1 = members.slice(0, form.idx - 1);
        const arr2 = members.slice(form.idx, members.length);
        setMembers(arr1.concat(oldMember).concat(arr2));
      }

      // console.log('form_id : ' + form.id);
      // console.log('member.id : ' + member.id);
      // setMembers(memberUpdate.concat(member));
    },
    [members],
  );

  const onRemove = useCallback(
    (idx) => {
      setMembers(members.filter((member) => member.idx !== idx));
    },
    [members],
  );

  const onUpdate = useCallback(
    (idx) => {
      const memberCheck = members.filter((member) => member.idx === idx)[0];
      console.log(memberCheck);

      const nextValues = {
        ...values,
        idx: memberCheck.idx,
        id: memberCheck.id,
        password: memberCheck.password,
        email: memberCheck.email,
        gender: memberCheck.gender,
      };

      setValues(nextValues);
    },
    [members],
  );

  // 삭제 확인창
  const onRemoveCheck = (idx) => {
    if (
      window.confirm(
        '해당 게시물을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.',
      )
    ) {
      onRemove(idx);
    }
  };

  return (
    <MemberTemplate>
      <MemberInsert onInsert={onInsert} values={values} />
      <table>
        {show && <TableModel />}
        <MemberList
          members={members}
          onRemoveCheck={onRemoveCheck}
          onUpdate={onUpdate}
          // inputUpdate={inputUpdate}
        />
      </table>
    </MemberTemplate>
  );
};

export default App;
