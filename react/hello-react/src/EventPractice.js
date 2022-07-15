// import { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     message: "",
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={(e) => {
//             console.log(e);
//             console.log(e.nativeEvent.data);
//             console.log(e.target.value);
//             this.setState({ message: e.target.value });
//             console.log(this.state.message);
//           }}
//         />
//         <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({ message: "" });
//           }}
//         >
//           확인
//         </button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

// import { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     message: "",
//   };

//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       message: e.target.value,
//     });
//   }

//   handleClick(e) {
//     alert(this.state.message);
//     this.setState({
//       message: "",
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

// import { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       message: e.target.value,
//     });
//   };

//   handleClick = (e) => {
//     alert(this.state.message);
//     this.setState({
//       message: "",
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

// import { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     userName: "",
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = (e) => {
//     alert(this.state.userName + ":" + this.state.message);
//     this.setState({
//       message: "",
//       userName: "",
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="userName"
//           placeholder="사용자명"
//           value={this.state.userName}
//           onChange={this.handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <br />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

// import { useState } from "react";

// const EventPractice = () => {
//   const [userName, setUserName] = useState("");
//   const [message, setMessage] = useState("");
//   const onChangeUserName = (e) => setUserName(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);
//   const onClick = () => {
//     alert(userName + ": " + message);
//     setUserName("");
//     setMessage("");
//   };
//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onClick();
//     }
//   };
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="userName"
//         placeholder="사용자명"
//         value={userName}
//         onChange={onChangeUserName}
//       />
//       <br />
//       <input
//         type="text"
//         name="message"
//         placeholder="아무거나 입력해 보세요"
//         value={message}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//       <br />
//       <button onClick={onClick}>확인</button>
//     </div>
//   );
// };
// export default EventPractice;

import { useState } from "react";

//
//
//
const EventPractice = () => {
  const [form, setForm] = useState({
    userName: "",
    message: "",
  });
  const { userName, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(userName + ": " + message);
    setForm({
      userName: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="userName"
        placeholder="사용자명"
        value={userName}
        onChange={onChange}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <br />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;
