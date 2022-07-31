import { useState, useRef, useEffect } from "react";
import Search from "./components/Search";
import List from "./components/List";
import './css/App.scss';
import logo from "./img/logo.png";

const App = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState("");
    const [category, setCategory] = useState("");
    const [cnt, setCnt] = useState(0);
    const [check, setCheck] = useState(true);


    const appRef = useRef('');
    // React.createElement()

    // 검색어 상태 업데이트
    const searchCheckData = (searchCheck) => {
        setSearch(searchCheck);
    };

    // 카테고리 상태 업데이트
    const onChangeCategory = (tn, ct, btnRef) => {
        setCategory(ct.value);
        console.log(ct.value);

        setData({ search });
        setCheck(false);

        // e.currentTarget.classList.add('on')
        for (var i = 0; i < 6; i++) {
          if(tn == i) {
            btnRef.current[i].classList.add("on");
          } else if (tn != i) {
            btnRef.current[i].classList.remove("on");
          }
        }

    };

    // 검색 버튼 클릭 시 실행 함수
    const onClick = (e) => {
        // 검색후 상태 초기화
        setData({ search });
        // setSearch("");
        console.log("category: ", category);
        console.log("search: ", search);
        console.log("data: ", data);
        setCnt(cnt + 1);
        setCheck(true);

        // e.currentTarget.classList.remove('on')
        appRef.current.classList.add('result');
        // btnRef.current.classList.remove('on');
        // console.log(btnRef);
        
    };

    // 검색어 입력 후 엔터 시 자동 버튼 클릭
    // const onKeyPress = (e) => {
    //     if (e.key === "Enter") {
    //         onClick();
    //     }
    // };

    return (
      <div className="App" ref={appRef}>
        <img className="logo" src={logo} alt="NAVER SEARCH API" />
        <div className="App-contents">
          <Search onChangeCategory={onChangeCategory} searchCheckData={searchCheckData} onClick={onClick} />
          <List data={data} category={category} cnt={cnt} check={check} />
        </div>

        <p className="copy">&copy;JS특화A-5조</p>
      </div>
    );
};

export default App;
