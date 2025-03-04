import styled from "styled-components";
import KinItem from "./KinItem";
import { useState, useEffect } from "react";
import axios from "axios";

const KinListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (min-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const KinList = ({ data, category, cnt, check, counter }) => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const NAVER_CLIENT_ID = "BFw6Z_s_WT32JVXE00Dm";
  const NAVER_CLIENT_SECRET = "VcUjlh1Aiz";
  const searchData = data.search;
  const searchCategory = category;
  console.log("category: ", category);
  console.log(data);
  console.log(searchData);

  console.log("searchData: ", searchData);

  const str = `/v1/search/${searchCategory}?query=${searchData}`;
  console.log(str);
  useEffect(() => {
    //async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = axios
          .get(str, {
            params: {
              // query: { search }, //이미지 검색 텍스트
              //   query: searchData, //이미지 검색 텍스트
              // start: 1, // 검색 시작 위치
              display: 50, // 가져올 이미지 갯수
              // sort: "sim", // 정렬 유형(sim:유사도)
            },
            headers: {
              "X-Naver-Client-Id": NAVER_CLIENT_ID,
              "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
            },
          })
          .then((response) => {
            //response.data.items : 데이터중 아이템 부분만 추출하여 상태 업데이트
            setItems(response.data.items);
            console.log(response.data.items);
            counter(response.data.total);
          });
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [cnt]);
  //대기 중일 때
  if (loading) {
    return <KinListBlock>대기 중...</KinListBlock>;
  }
  // 아직 items 값이 설정되지 않았을 때
  if (!items) {
    return null;
  }
  // 아직 searchData 값이 설정되지 않았을 때
  if (data === "") {
    setItems(null);
    return null;
  } else if (check) {
    // items 값이 유효할 때
    return (
      <KinListBlock>
        {items.map((item) => (
          <KinItem
            key={item.link}
            item={item}
            searchCategory={searchCategory}
          />
        ))}
      </KinListBlock>
    );
  }
};

export default KinList;
