const MemberManagement = ({ children }) => {
  return (
    <div className="MemberManagement">
      <div className="title">회원 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default MemberManagement;
