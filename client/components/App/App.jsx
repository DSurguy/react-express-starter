import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      count: 0
    };

    //bind instance functions to instance context so render doesn't break them
    ([
      'sampleFunction'
    ]).forEach((functionName) => {
      this[functionName] = this[functionName].bind(this);
    })
  }

  render(){
    return (<React.Fragment>
      <h1>Hello World! CHANGE 7</h1>
      <button onClick={this.sampleFunction}>Increment Counter</button>
      <p>
        <span>Count: {this.state.count}</span>
      </p>
    </React.Fragment>)
  }

  sampleFunction(){
    this.setState({
      count: this.state.count+1
    })
  }
}

export default hot(module)(App)