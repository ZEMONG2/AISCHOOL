import React from 'react';
const MemberListItem = ({ member, onRemoveCheck, onUpdate }) => {
  const { idx, id, password, email, gender } = member;

  return (
    <tr>
      <td>{idx}</td>
      <td>{id}</td>
      <td>{password}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>
        <button type="update" onClick={() => onUpdate(idx)}>
          수정
        </button>
        <button type="remove" onClick={() => onRemoveCheck(idx)}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default MemberListItem;
