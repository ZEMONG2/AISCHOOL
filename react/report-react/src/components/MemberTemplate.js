const MemberTemplate = ({ children }) => {
  return (
    <div className="MemberTemplate">
      <div className="title">회원 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default MemberTemplate;
