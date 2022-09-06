import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null; // ref를 설정할 부분
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) { // 컴포넌트가 마운트 될때와 업데이트 될때 호출
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }


    // 컴포넌트가 마운트 될때와 업데이트 될때 호출
    shouldComponentUpdate(nextProps, nextState) { // 마지막 숫자가 4일 경우 업데이트 취소
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
    }
    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    render() {
        console.log('render')

        const style = {
            color: this.props.color
        };

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }

    componentDidMount() { // 컴포넌트를 만들고 첫 렌더링을 마친후 실행
        console.log('componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) { // render에서 만들어진 결과물이 브라우저에 실제 반영되기 직전에 호출
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트되기 직전 생상: ', snapshot);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }


}


export default LifeCycleSample;