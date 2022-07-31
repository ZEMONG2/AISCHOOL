import KinItem from './KinItem';
import MovieItem from './MovieItem';
import ImageItem from './ImageItem';
import ShopItem from './ShopItem';
import BlogItem from './BlogItem';
import NewsItem from './NewsItem';
import '../css/Item.scss';
import moment from 'moment';

const Item = ({ item, searchCategory }) => {
  console.log("searchCategory: ", searchCategory);
  const newTitle = item.title.replace(/<b>/g, "").replace(/<\/b>/g, "");
  const newLink = item.link.replace(/<b>/g, "").replace(/<\/b>/g, "");
  const newDescription =
      item.description &&
      item.description.replace(/<b>/g, "").replace(/<\/b>/g, "");
  const newActor = item.actor && item.actor.replace(/\|/g, ", ").replace(/,\s*$/, '');
  const newDirector = item.director && item.director.replace(/\|/g, "");
  const l_price = parseInt(item.lprice).toLocaleString(); //최저가
  const img_link = item.image; //상품 이미지 링크
  const NewPubDate = moment(item.pubDate).format("YYYY년 MM월 DD일 HH:MM");


  return (
    <div className="Item">
      {searchCategory === "kin" ? (
        <KinItem newTitle={newTitle} newLink={newLink} newDescription={newDescription} item={item} />
      ) : searchCategory === "movie" ? (
        <MovieItem item={item} newTitle={newTitle} newDirector={newDirector} newActor={newActor} newDescription={newDescription}/>
      ) : searchCategory === "image" ? (
        <ImageItem item={item} newTitle={newTitle} />
      ) : searchCategory === "shop" ? (
        <ShopItem item={item} newTitle={newTitle} l_price={l_price} img_link={img_link} />
      ) : searchCategory === "blog" ? (
        <BlogItem item={item} />
      ) : searchCategory === "news" ? (
        <NewsItem item={item} newTitle={newTitle} NewPubDate={NewPubDate} />
      ) : null}
    </div>
  );
};

export default Item;
