// import { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// const App = () => {
//   const [data2, setData2] = useState(null);
//   const [result, setResult] = useState(null);
//   const check = [
//     { id: 'admin', pw: 12345, name: 'test' },
//     { id: 'ttt', pw: 123, name: 'xxx' },
//   ];
//   const check1 = JSON.stringify(check, ['pw', 'name'], 2);
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=6bf156c1ad1a48b886347ae39fa7b145',
//       );

//       setData2(response.data);
//       setResult(response.data.articles);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data2 && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(result, ['title', 'url', 'content'], 2)}
//           readOnly={true}
//         />
//       )}
//     </div>
//   );
// };

// export default App;

import { useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import NewsList from './components/NewsList';
import NewsPage from './pages/NewsPage';
import Categories from './components/Categories';

const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);
  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />
  //   </>
  // );
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
