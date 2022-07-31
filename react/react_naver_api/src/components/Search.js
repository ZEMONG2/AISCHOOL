import React from "react";
import { useState, useRef } from "react";
import "./Search.css";

const Search = ({ onChangeCategori, searchCheckData, onKeyPress, onClick }) => {
  const [searchCheck, setSearchCheck] = useState("");
  const btnRef = useRef([]);
  // 검색어 상태 업데이트
  const onChangeInput = (e) => {
    setSearchCheck(e.target.value);
    console.log("input: " + e.target.value);
    // searchCheckData(searchCheck);
    searchCheckData(e.target.value);
  };

  const onChangeCategori2 = (e) => {
    const tn = e.target.name;
    const ct = e.currentTarget;
    console.log("tn : ", tn);
    console.log("ct : ", ct);
    onChangeCategori(tn, ct, btnRef);
    btnRef.current[6].placeholder =
      ct.value == "cafearticle"
        ? "카페 검색"
        : ct.value == "image"
        ? "이미지 검색"
        : ct.value == "news"
        ? "뉴스 검색"
        : ct.value == "blog"
        ? "블로그 검색"
        : ct.value == "kin"
        ? "지식인 검색"
        : ct.value == "movie"
        ? "영화 검색"
        : "";
  };

  const onClickInput = () => {
    setSearchCheck("");
    // btnRef.current[6].placeholder = "카테고리 선택";
    onClick();
  };
  const onKeyPress2 = (e) => {
    setSearchCheck("");
    if (e.key === "Enter") {
      // btnRef.current[6].placeholder = "카테고리 선택";
      onKeyPress();
    }
  };
  return (
    <>
      {/* 카테고리 선택 버튼 */}
      <button
        name={0}
        ref={(ref) => (btnRef.current[0] = ref)}
        value="cafearticle"
        onClick={onChangeCategori2}
      >
        카페
      </button>
      <button
        name={1}
        ref={(ref) => (btnRef.current[1] = ref)}
        value="image"
        onClick={onChangeCategori2}
      >
        이미지
      </button>
      <button
        name={2}
        ref={(ref) => (btnRef.current[2] = ref)}
        value="news"
        onClick={onChangeCategori2}
      >
        뉴스
      </button>
      <button
        name={3}
        ref={(ref) => (btnRef.current[3] = ref)}
        value="blog"
        onClick={onChangeCategori2}
      >
        블로그
      </button>
      <button
        name={4}
        ref={(ref) => (btnRef.current[4] = ref)}
        value="kin"
        onClick={onChangeCategori2}
      >
        지식인
      </button>
      <button
        name={5}
        ref={(ref) => (btnRef.current[5] = ref)}
        value="movie"
        onClick={onChangeCategori2}
      >
        영화
      </button>
      <br />
      {/* 검색어 입력 */}
      <input
        type="text"
        name="searchWord"
        onChange={onChangeInput}
        value={searchCheck}
        onKeyPress={onKeyPress2}
        ref={(ref) => (btnRef.current[6] = ref)}
        placeholder="카테고리 선택"
      />

      {/* 검색 버튼 */}
      <button onClick={onClickInput}>검색</button>
    </>
  );
};

export default Search;
