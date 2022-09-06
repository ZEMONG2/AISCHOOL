import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  input = React.createRef([]);
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated1: this.state.password === "0000",
      validated2: this.state.name === "admin",


    });


    // (validated1 == 'false') && (validated2 == 'false') ? this.password.focus() :
    //   (validated1 == 'true') && (validated2 == 'false') ? this.name.focus() :
    //     (validated1 == 'false') && (validated2 == 'true') ? this.password.focus()

  };
  onKeyPress = (e) => {
    if (e.key === "Enter") {
      for (var i = 0; i < this.input.current.length - 1; i++) {
        if (!(this.input.current[i].value === "")) {
          this.input.current[i + 1].focus();
        }
      }
      console.log(this.input.current)
    }
  }

  render() {
    return (
      <div>
        <input
          type="password"
          name="password"
          ref={ref => (this.input.current[0]) = ref}
          placeholder="패스워드"
          value={this.state.password}
          onChange={this.handleChange}
          onKeyPress={this.onKeyPress}
          className={
            this.state.clicked
              ? this.state.validated1
                ? "success"
                : "failure"
              : ""
          }
        />
        <input
          type="text"
          name="name"
          ref={ref => (this.input.current[1]) = ref}
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          onKeyPress={this.onKeyPress}
          className={
            this.state.clicked
              ? this.state.validated2
                ? "success"
                : "failure"
              : ""
          }
        />

        <input
          type="text"
          name="age"
          ref={ref => (this.input.current[2]) = ref}
          placeholder="나이"
          value={this.state.age}
          onChange={this.handleChange}
          onKeyPress={this.onKeyPress}
          className={
            this.state.clicked
              ? this.state.validated2
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
