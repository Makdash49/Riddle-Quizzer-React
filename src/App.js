// src/App.js

import React, { Component } from 'react';
import Joke from './components/joke';


class App extends Component {
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

  render() {
    return (
      <Joke joke={this.state.joke} />
    );
  }
}

export default App;
