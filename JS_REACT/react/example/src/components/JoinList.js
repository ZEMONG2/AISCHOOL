import JoinListItem from "./JoinListItem";

const JoinList = ({ joins, onRemove, onUpdateForm }) => {
  return (
    <div className="JoinList">
      {joins.map((join, index) => (
        <JoinListItem
          join={join}
          idx={index}
          onRemove={onRemove}
          onUpdateForm={onUpdateForm}
        />
      ))}
    </div>
  );
};

export default JoinList;
