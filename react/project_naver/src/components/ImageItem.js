// import styled from "styled-components";

// const ImageItemBlock = styled.div`
//   display: inline-block;
//   .thumbnail {
//     margin-right: 1rem;
//     img {
//       object-fit: cover;
//       border-radius : 20px;
//       border : solid 1px;
//       position : relative;
//     }
//   }
//   }
// `;
import '../css/ImageItem.scss';

const ImageItem = ({item,  newTitle}) => {
    console.log(item);
    return (
        <div className="Images">
            <div className="thumbnail">
                <a href={item.link} target="_blank" rel="noopener noreferrer" title="원본보기">
                    <img src={item.link} alt="thumbnail"  onError = {e => e.target.style.display = 'none'} />
                    <p>{newTitle}</p>
                </a>
            </div>
        </div>
    );
};

export default ImageItem;