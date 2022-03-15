import React from 'react';
import './App.css';
import Input from './components/Input/Input';
import Result from './components/Result/Result';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleXCallback (value) {
    this.setState({x: value});
  }

  handleYCallback (value) {
    this.setState({y: value});
  }

  render () {
    return (
      <div className="App" class="flex items-center justify-center flex-col h-screen">
        <div class="flex m-10">
          <Input valueChange={this.handleXCallback.bind(this)} label="x"></Input>
          <Input valueChange={this.handleYCallback.bind(this)} label="y"></Input>
        </div>
        <Result device={{x: this.state.x, y: this.state.y}}></Result>
      </div>
    );
  }
}

export default App;
