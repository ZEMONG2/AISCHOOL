import { useState } from "react";
import styled from "styled-components";

const KinItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const KinItem = ({ item, searchCategory }) => {
  console.log("searchCategory: ", searchCategory);
  //   const { itemData, setItemData } = useState({
  //     title: "",
  //     link: "",
  //     description: "",
  //     image: "",
  //     director: "",
  //     actor: "",
  //     userRating: "",
  //   });
  //   const cut =
  //     (() => {
  //       setItemData(item);
  //     },
  //     [searchCategory]);
  //   if (searchCategory === "kin") {
  //     const { title, link, description } = item;
  //   } else if (searchCategory === "movie") {
  //     const { title, link, image, director, actor, userRating } = item;
  //   }

  //   const newTitle = "";
  //   const newLink = "";
  //   const newDescription = "";
  //   const newDirector = "";
  //   const newActor = "";
  const newTitle = item.title.replace(/<b>/g, "").replace(/<\/b>/g, "");
  const newLink = item.link.replace(/<b>/g, "").replace(/<\/b>/g, "");
  // const newDescription =
  //   item.description &&
  //   item.description.replace(/<b>/g, "").replace(/<\/b>/g, "");
  const newActor = item.actor && item.actor.replace(/\|/g, ", ");
  const newDirector = item.director && item.director.replace(/\|/g, "");
  const testing = {
    backgroundImage: `url(${item.image})`,
    width: "250px",
    height: "400px",
  };
  return (
    <KinItemBlock>
      {searchCategory === "kin" ? (
        <div className="contents">
          <h2>
            <a href={newLink} target="_blank" rel="noopener noreferrer">
              {newTitle}
            </a>
          </h2>
          <p>{item.description}</p>
        </div>
      ) : searchCategory === "movie" ? (
        <div>
          <div className="thumbnail" style={testing}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {/* <img src={item.image} alt="thumbnail" /> */}
            </a>
          </div>
          <div className="contents">
            <h3>{newTitle}</h3>
            <p>{newDirector}</p>
            <p>{newActor}</p>
            <p>{item.userRating}</p>
          </div>
        </div>
      ) : null}
    </KinItemBlock>
  );
};

export default KinItem;
