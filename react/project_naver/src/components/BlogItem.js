const BlogItem = ({item, newLink, newTitle, newDescription}) => {

    return (
      <div className="BlogItem">
        <div className="contents">
          <h2 dangerouslySetInnerHTML={{ __html: item.title}}></h2>

          <div className="txt">
            <p className="blogger"><span class="b-img">🧑‍💻</span>{item.bloggername}</p>
            <p dangerouslySetInnerHTML={{ __html: item.description}} />
          </div>
          <a className="btn-more" href={newLink} target="_blank" rel="noopener noreferrer"><span>자세히 보기</span></a>
        </div>
      </div>
    );
};

export default BlogItem;