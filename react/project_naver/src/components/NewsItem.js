const NewsItem = ({ item, NewPubDate, newTitle }) => {
  return (
    <div className="NewsItem">
      <div className="contents">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
          <p className="date">{NewPubDate}</p>
          <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
