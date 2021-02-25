// src/App.js

import React, { Component } from 'react';
import Joke from './components/joke';
import List from './components/list';



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


class App extends Component {
  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
  }

  state = {
    jokes: [],
    shuffled: [],
  }
     handleClick() {
       fetch('https://official-joke-api.appspot.com/jokes/ten')
         .then(res => res.json())
         .then((data) => {
           const firstFour = data.slice(0,4);
           const shuffledFour = (shuffle(Array.from(firstFour)))
           this.setState({ jokes: firstFour,
                           shuffled: shuffledFour});
           console.log("state: ", this.state);
         })
         .catch(console.log)
         this.setState()

       }

  render() {
    return (
      <div>
        <button className="Click-here" onClick={this.handleClick}>Click Me for a Joke</button>
          <Joke joke={this.state.jokes} />
          <List list={this.state.shuffled} />
      </div>
    );
  }
}

export default App;


// Todo list:
// Add a scrambled jokes list
// Allow the user to select an answer either by typing the letter or clicking on the component
// Check the letter's joke id against the unscrambled joke list to see if it matches
// If it matches move onto the next joke setup.
// Keep going until 4 jokes have been answered.
