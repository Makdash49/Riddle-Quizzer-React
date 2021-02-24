// src/App.js

import React, { Component } from 'react';
import Joke from './components/joke';


class App extends Component {
  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
  }

  state = {
    jokes: []
  }

   handleClick() {
     this.setState({jokes: []});
     var times = 4;
     for (var i =0; i < times; i++){
       console.log("hello", i);
       fetch('https://official-joke-api.appspot.com/random_joke')
         .then(res => res.json())
         .then((data) => {
           this.setState({ jokes: [...this.state.jokes, data]})
           console.log("joke: ", this.state);
         })
         .catch(console.log)
       }
     }

  render() {
    return (
      <div>
        <button className="Click-here" onClick={this.handleClick}>Click Me for a Joke</button>
          <Joke joke={this.state.jokes} />
      </div>
    );
  }
}

export default App;

// <Joke joke={this.state.joke} />
