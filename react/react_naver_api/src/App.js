import KinList from "./components/KinList";
import { useState } from "react";
import Search from "./components/Search";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [category, setCategory] = useState("");
  const [cnt, setCnt] = useState(0);
  const [check, setCheck] = useState(true);
  const [count, setCount] = useState(0);

  // 검색어 상태 업데이트
  const searchCheckData = (searchCheck) => {
    setSearch(searchCheck);
    console.log("input2: " + searchCheck);
  };
  // 카테고리 상태 업데이트
  const onChangeCategori = (tn, ct, btnRef) => {
    console.log("btnRef : ", btnRef);
    setCategory(ct.value);
    console.log(ct.value);
    setData({ search });
    setCheck(false);
    for (var i = 0; i < 6; i++) {
      if (tn == i) {
        btnRef.current[i].classList.add("on");
      } else if (tn != i) {
        btnRef.current[i].classList.remove("on");
      }
    }
  };

  // 검색 버튼 클릭 시 실행 함수
  const onClick = () => {
    // 검색후 상태 초기화
    setData({ search });
    // setSearch("");
    console.log("category: ", category);
    console.log("search: ", search);
    console.log("data: ", data);
    setCnt(cnt + 1);
    setCheck(true);
  };

  const counter = (listCount) => {
    setCount(listCount);
  };

  // 검색어 입력 후 엔터 시 자동 버튼 클릭
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <>
      <Search
        onChangeCategori={onChangeCategori}
        searchCheckData={searchCheckData}
        onKeyPress={onKeyPress}
        onClick={onClick}
      />
      <br />
      {check && count !== 0 ? <span>{count}개가 검색 되었습니다.</span> : null}

      <KinList
        data={data}
        category={category}
        cnt={cnt}
        check={check}
        counter={counter}
      />
    </>
  );
};
export default App;
