// src/App.js

import React, { Component } from 'react';
import Joke from './components/joke';


class App extends Component {
  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
  }
  
  state = {
    joke: []
  }

  componentDidMount() {
     fetch('https://official-joke-api.appspot.com/random_joke')
     .then(res => res.json())
     .then((data) => {
       this.setState({ joke: data })
       console.log("Mark has retrieved some data: ", data)
     })
     .catch(console.log)
   }

   handleClick() {
   console.log('Click happened');
 }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <Joke joke={this.state.joke} />
      </div>
    );
  }
}

export default App;
