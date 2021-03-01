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
  this.compareId = this.compareId.bind(this);
  }

  state = {
    jokes: [],
    shuffled: [],
    feedback: "",
    setupIndex: 0,
    score: 0,
    timer: 20,
    timerCanRun: true
  }


    startTimer(time) {
      const that = this;
      if (time > 0 && this.state.timerCanRun) {
        if (time === 1) {this.setState({feedback: "You ran out of time!!!!"})}
        this.setState({timer: time - 1})
        setTimeout(function(){
          that.startTimer(time - 1)}, 1000);
        }
      }

     handleClick() {
       const that = this;
       this.setState({timer: 20,
                      timerCanRun: true});
       setTimeout(function(){
         that.startTimer(that.state.timer)}, 1000);
       fetch('https://official-joke-api.appspot.com/jokes/ten')
         .then(res => res.json())
         .then((data) => {
           const firstFour = data.slice(0,4);
           const shuffledFour = (shuffle(Array.from(firstFour)))
           this.setState({ jokes: firstFour,
                           shuffled: shuffledFour,
                           setupIndex: 0,
                           feedback: ""});
           console.log("state: ", this.state);
         })
         .catch(console.log)
       }

       compareId(punchlineId) {
         const setupIndex = this.state.setupIndex;
         const setupId = this.state.jokes[setupIndex].id;
         const score = this.state.score;
         const that = this;

         if (setupId === parseInt(punchlineId) && setupIndex < 3) {
           this.setState({feedback: "You got it right!!!",
                                     score: (score + 1)});
           setTimeout(function(){that.setState({feedback: "",
                                                setupIndex: (setupIndex + 1)})}, 1000);
         } else if (setupId === parseInt(punchlineId) && setupIndex === 3) {
           this.setState({feedback: "You cleared the jokes. Click for more!",
                          score: (score + 1),
                          timerCanRun: false});
         } else {
           this.setState({feedback: "WRONG!!!",
                          score: (score - 1)});
           setTimeout(function(){that.setState({feedback: ""})}, 1000);
         }
       }

  render() {
    return (
      <div className="joke-container centered">
        <h1>Riddle Quizzer React</h1>
        <h3>Your score: {this.state.score}</h3>
        <h3>Timer: {this.state.timer}</h3>
        <button className="Click-here" onClick={this.handleClick}>Click to Start</button>
          <Joke joke={this.state.jokes} setupIndex={this.state.setupIndex}/>
          <List list={this.state.shuffled} compareId={this.compareId} timer={this.state.timer}/>
          {/* This could be its own component*/}
          <h1>{this.state.feedback}</h1>
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
// Add random heckles when the answers are wrong.
// Sound effects
// timer
// points, add point for right answer, take away point for wrong.
