import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.TAG = 'App'
    console.log(this.TAG, 'constructor: 클래스의 시작');
    this.state = {
      hello: 'hello app js!',
      count: 0,
    };
  }

  componentDidMount = () => {
    console.log(this.TAG, 'componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.TAG, 'componentDidUpdate: 컴포넌트가 업데이트 됨');
    // 업데이트 되기 전 state
    console.log(this.TAG, '업데이트 전', prevState);
    // 업데이트 된 후의 현재 state
    console.log(this.TAG, '업데이트 후', this.state);
  }

  componentWillUnmount = () => {
    console.log(this.TAG, 'componentWillUnmount');
  }

  handleChange = () => {
    this.setState({
      hello: 'bye app js!',
    })
  }

  countUp = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    console.log(this.TAG, 'render');
    return (
      <div className='App'>
        <h3>Index Props</h3>
        <div className='props'>
          <span>{this.props.message}</span>
        </div>

        <h3>States</h3>
        <div className='states'>
          <div>
            {this.state.hello}
            <button onClick={this.handleChange}>Click Me</button>
          </div>
          <div>
            {this.state.count}
            <button onClick={this.countUp}>Click Me</button>
          </div>
        </div>

        <h3>App Props</h3>
        <div className='inside-app-props'>
          <InsideApp
            count={this.state.count}
            handleChange={this.countUp} />
        </div>
      </div>
    )
  }
}


class InsideApp extends Component {
  constructor(props) {
    super(props);
    this.TAG = 'InsideApp'
    console.log(this.TAG, 'constructor: 클래스의 시작');
  }

  render() {
    console.log(this.TAG, 'render');
    return (
      <div>
        {this.props.count}
        <button onClick={this.props.handleChange}>Click Me</button>
      </div>
    )
  }
}

export default App;
