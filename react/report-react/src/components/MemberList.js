import MemberListItem from './MemberListItem';

const MemberList = ({ members, onRemoveCheck, onUpdate }) => {
  return (
    <>
      {members.map((member) => (
        <MemberListItem
          member={member}
          key={member.idx}
          onRemoveCheck={onRemoveCheck}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
};

export default MemberList;
