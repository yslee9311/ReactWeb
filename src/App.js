import React, { Component } from 'react';

class App extends Component {
  state = {
    hello: 'hello app js!',
    count: 0,
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
    return (
      <div className="App">
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
  render() {
    console.log('2222', this.props);
    return (
      <div>
        {this.props.count}
        <button onClick={this.props.handleChange}>Click Me</button>
      </div>
    )
  }
}

export default App;
