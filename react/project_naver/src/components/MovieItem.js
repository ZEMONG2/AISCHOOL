const MovieItem = ({item, newDirector, newActor}) => {
    // console.log(item);
    return (
        <div className="MovieItem">
          {/* <div backgroundImage={item.image}></div> */}
          <div className="thumbnail">
            {/* {item.image === null ? <div className="no-img" /> : <img src={item.image} alt="thumbnail" />} */}
            <img src={item.image} alt="thumbnail" onError = {e => e.target.style.display = 'none'} />
          </div>
          <div className="contents">
            <div className="txt">
              <h2>
                <span dangerouslySetInnerHTML={{ __html: item.title}}></span>
                (<span dangerouslySetInnerHTML={{ __html: item.pubDate}}></span>)
              </h2>
              <p>감독 : {newDirector}</p>
              <p>출연 배우 : {newActor}</p>
              <p>⭐ {item.userRating}</p>
            </div>
            <a className="btn-more" href={item.link} target="_blank" rel="noopener noreferrer">
              <span>더보기</span>
            </a>
          </div>
        </div>
    );
};

export default MovieItem;