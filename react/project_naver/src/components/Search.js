import { useState, useRef, useEffect } from "react";
import { RiSearch2Line, RiArrowUpLine } from "react-icons/ri";
import '../css/Search.scss';

const Search = ({onChangeCategory, searchCheckData, onKeyPress, onClick}) => {
    const [searchCheck, setSearchCheck] = useState("");
    const [scrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);
    const btnRef = useRef([]);

    const onChangeInput = (e) => {
        setSearchCheck(e.target.value);
        searchCheckData(e.target.value);
    };

    const onChangeCategory2 = (e) => {
        const tn = e.target.name;
        const ct = e.currentTarget;

        onChangeCategory(tn, ct, btnRef);
        btnRef.current[6].placeholder = 
            ct.value == 'image' ? '이미지를 검색해주세요' :
            ct.value == 'news' ? '뉴스를 검색해주세요' :
            ct.value == 'blog' ? '블로그를 검색해주세요' :
            ct.value == 'kin' ? '지식인을 검색해주세요' :
            ct.value == 'movie' ? '영화제목을 검색해주세요' :
            ct.value == 'shop' ? '쇼핑 제품을 검색해주세요' :
            '';

        setSearchCheck('');
    };

    const onClickInput = () => {
        // setSearchCheck('');
        onClick();
    };

    const onKeyPress2 = (e) => {
        // onKeyPress();
        // setSearchCheck('');
        if (e.key === 'Enter') {
            // onKeyPress();
            onClick();
        }
    }

    // 스크롤 이벤트
    const onScroll = (e) => {
        if (scrollY > 300) {
          setScrollY(window.pageYOffset);
          setScrollActive(true);
        } else {
          setScrollY(window.pageYOffset);
          setScrollActive(false);
        }

        console.log('스크롤',window.pageYOffset);
    };

    useEffect(() => {
      function scrollListener() {
        window.addEventListener('scroll', onScroll);
      };
      scrollListener();

      return () => {
        window.removeEventListener('scroll', onScroll);
      }
    });

    const onScrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
        setScrollY(0);
        // setScrollActive(false);
    }

    return (
        <>
            <div className={scrollActive ? 'Search fixed' : 'Search'}>
                <div className="Category">
                    {/* 카테고리 선택 버튼 */}
                    <button name ="0" value="image" ref={(ref) => (btnRef.current[0] = ref)} onClick={onChangeCategory2}>
                        이미지
                    </button>
                    <button name ="1" value="news" ref={(ref) => (btnRef.current[1] = ref)} onClick={onChangeCategory2}>
                        뉴스
                    </button>
                    <button name ="2" value="blog" ref={(ref) => (btnRef.current[2] = ref)} onClick={onChangeCategory2}>
                        블로그
                    </button>
                    <button name ="3" value="kin" ref={(ref) => (btnRef.current[3] = ref)} onClick={onChangeCategory2}>
                        지식iN
                    </button>
                    <button name ="4" value="movie" ref={(ref) => (btnRef.current[4] = ref)} onClick={onChangeCategory2}>
                        영화
                    </button>
                    <button name ="5" value="shop" ref={(ref) => (btnRef.current[5] = ref)} onClick={onChangeCategory2}>
                        쇼핑
                    </button>
                </div>
                
                <div className="search-wrap">
                    {/* 검색어 입력 */}
                    <input
                        type="text"
                        name="searchWord"
                        onChange={onChangeInput}
                        value={searchCheck}
                        onKeyPress={onKeyPress2}
                        ref={(ref) => (btnRef.current[6] = ref)}
                    />

                    {/* 검색 버튼 */}
                    <button className="btn-search" onClick={onClickInput}><RiSearch2Line /></button>
                </div>
            </div>
            
            <button onClick={onScrollTop} className={scrollActive ? 'btn-up fixed' : 'btn-up'}><RiArrowUpLine /></button>
        </>
    );
};

export default Search;