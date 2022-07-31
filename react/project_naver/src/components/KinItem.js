const KinItem = ({item, newLink, newTitle, newDescription}) => {

    return (
      <div className="KinItem">
        <div className="contents">
          <h2>Q. {newTitle}</h2>
          {/* <div className="txt"><p>{newDescription}</p></div> */}

          <div className="txt">
            <p dangerouslySetInnerHTML={{ __html: item.description}} />
          </div>
          <a className="btn-more" href={newLink} target="_blank" rel="noopener noreferrer"><span>자세히 보기</span></a>
        </div>
      </div>
    );
};

export default KinItem;