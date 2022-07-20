import MemberListItem from './MemberListItem';

const MemberList = ({ members }) => {
  return (
    <div className="MemberList">
      {members.map((member) => (
        <MemberListItem member={member} key={member.id} />
      ))}
    </div>
  );
};

export default MemberList;
