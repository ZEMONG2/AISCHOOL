import '../css/ShopItem.scss';

const ShopItem = ({item, img_link, l_price}) => {
    // console.log(item);
    return (
         <div className="ShopItem">
            {/* 이미지 */}
            <div className="thumbnail">
                {/* <img className="g_img" src={img_link} alt="thumbnail" /> */}
                <img src={item.image} alt="thumbnail" onError = {e => e.target.style.display = 'none'} />
            </div>
            <div className="contents">
                {/* 상품명 */}
                {/* 문자열에 html태그가 포함되는 상황을 해결하기 위한 코드 */}
                <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                {/* 가격 */}
                <p className="l_price">
                    최저가 <b>{l_price}</b>원
                </p>
                {/* 카테고리 */}
                <ul className="category">
                    {item.category1 && <li>{item.category1}</li>}
                    {item.category2 && <li>{item.category2}</li>}
                    {item.category3 && <li>{item.category3}</li>}
                    {item.category4 && <li>{item.category4}</li>}
                </ul>
                <a className="btn-more" href={item.link} target="_blank" rel="noopener noreferrer">
                    <span>구매하기</span>
                </a>
            </div>
        </div>
    );
};

export default ShopItem;