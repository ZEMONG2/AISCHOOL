import { useState, useRef, useCallback } from 'react';
import MemberManagement from './components/MemberManagement';
import MemberInsert from './components/MemberInsert';
import MemberList from './components/MemberList';

const App = () => {
  const [members, setMembers] = useState([]);
  const nextIdx = useRef(1);

  const onInsert = useCallback(
    (form) => {
      const member = {
        idx: nextIdx.current,
        id: form.id,
        password: form.password,
        email: form.email,
        gender: form.gender,
      };
      console.log(member);
      setMembers(members.concat(member));
      nextIdx.current += 1;
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
      const memberUpdate = {
        idx: memberCheck.idx,
        id: memberCheck.id,
        password: memberCheck.password,
        email: memberCheck.email,
        gender: memberCheck.gender,
      };
      console.log(memberUpdate);
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
    <MemberManagement>
      <MemberInsert onInsert={onInsert} />
      <table>
        <tr>
          <td>No.</td>
          <td>아이디</td>
          <td>비밀번호</td>
          <td>이메일</td>
          <td>성별</td>
          <td>&nbsp;</td>
        </tr>
        <MemberList
          members={members}
          onRemoveCheck={onRemoveCheck}
          onUpdate={onUpdate}
        />
      </table>
    </MemberManagement>
  );
};

export default App;
