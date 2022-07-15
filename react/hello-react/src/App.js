// import logo from "./logo.svg";
import "./App.css";
// import RefSample from "../RefSample";
import ScrollBox from "./ScrollBox";
import InterationSample from "./InterationSample";
import { Component } from "react";

// import {
//   MyComponent,
//   MyComponent0,
//   MyComponent1,
//   MyComponent2,
// } from "./MyComponent";
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
import FormInput from "./FormInput";
import ValidationSample from "./ValidationSample";

// function App() {
//   // const name = "리엑트";
//   // return (
//   //   <div>
//   //     {name === "리액트" ? (
//   //       <h1>리액트입니다.</h1>
//   //     ) : name === "리엑트" ? (
//   //       <h2>리엑트입니다.</h2>
//   //     ) : (
//   //       <h3>리액트가 아닙니다.</h3>
//   //     )}
//   //   </div>
//   // );

//   const name = "리액트";
//   return <div className="react">{name}</div>;
// }

// class App extends Component {
//   render() {
//     return (
//       <MyComponent name="유재열" favoriteNumber={5}>
//         리액트
//       </MyComponent>
//     );
//   }
// }

// const App = () => {
//   return (
//     <div>
//       <MyComponent name="유재열0" favoriteNumber={5}>
//         리액트
//       </MyComponent>
//       <br />
//       <MyComponent0 name="유재열0" favoriteNumber={5}>
//         리액트
//       </MyComponent0>
//       <MyComponent1 name="유재열1" favoriteNumber={3}>
//         리액트
//       </MyComponent1>
//       <MyComponent2 name="유재열2" favoriteNumber={1}>
//         리액트
//       </MyComponent2>
//     </div>
//   );
// };
// const App = () => {
//   return <Counter />;
// };

// const App = () => {
//   return <ValidationSample />;
// };

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => this.scrollBox = ref} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
//         <button onClick={() => this.scrollBox.scrollToTop()}>맨 위로</button>
//       </div>
//     )
//   }
// }



// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ValidationSample />
//       </div>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <InterationSample />
    )
  }
}


export default App;
