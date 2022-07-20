import React from 'react';

const MemberListItem = ({ member }) => {
  const { id, password, email, gender } = member;

  return (
    <div className="MemberListItem">
      <span>아이디 : {id}</span>
      <span>비밀번호 : {password}</span>
      <span>이메일 : {email}</span>
      <span>성별 : {gender}</span>
      <button type="update">수정</button>
      <button type="delete">삭제</button>
    </div>
  );
};

export default MemberListItem;
