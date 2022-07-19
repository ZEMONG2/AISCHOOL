import Counter from './Counter';
import Info from './Info';
import FormInput from './FormInput';
import { useState } from 'react';
import './App.css';
import Average from './Average';

// const App = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <div><button onClick={() => {
//       setVisible(!visible);
//     }}>{visible ? '숨기기' : '보이기'}</button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   )
// }

const App = () => {


  return (
    <FormInput />
  )
}


export default App;
