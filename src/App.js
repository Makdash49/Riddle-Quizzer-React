// src/App.js

import React, { Component } from 'react';
import Joke from './components/joke';
import List from './components/list';
var data = require('./jokesArray');

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
    hasZero: "",
    timerCanRun: true,
    startButtonActive: true
  }


    startTimer(time) {
      const that = this;
      if (time > 0 && this.state.timerCanRun) {
        if (time > 9) {this.setState({hasZero: ""})};
        if (time < 11) {this.setState({hasZero: "0"})};

        if (time === 1) {this.setState({feedback: "You ran out of time!!!!",
                                        startButtonActive: true})}
        this.setState({timer: time - 1})
        setTimeout(function(){
          that.startTimer(time - 1)}, 1000);
        }
      }

     handleClick() {
       const that = this;
       this.setState({timer: 20,
                      hasZero: "",
                      timerCanRun: true});

        const shuffledData = shuffle(data);
        const firstFour = shuffledData.slice(0,4);
        const shuffledFour = (shuffle(Array.from(firstFour)))
        this.setState({ jokes: firstFour,
                        shuffled: shuffledFour,
                        setupIndex: 0,
                        feedback: "",
                        startButtonActive: false});
        // console.log("state: ", this.state);
        setTimeout(function(){
        that.startTimer(that.state.timer)}, 1000);
      }

       compareId(punchlineId) {
         const setupIndex = this.state.setupIndex;
         const setupId = this.state.jokes[setupIndex].id;
         const score = this.state.score;
         const that = this;

         console.log("state: ", this.state);

         if (this.state.timerCanRun) {
           if (setupId === parseInt(punchlineId) && setupIndex < 3) {
             this.setState({feedback: "You got it right!!! +1",
                                       score: (score + 1)});
             setTimeout(function(){that.setState({feedback: "",
                                                  setupIndex: (setupIndex + 1)})}, 1000);
           } else if (setupId === parseInt(punchlineId) && setupIndex === 3) {
             this.setState({feedback: "You cleared the jokes. Click for more!",
                            score: (score + 1),
                            timerCanRun: false,
                            startButtonActive: true})
           } else {
             this.setState({feedback: "WRONG!!! -1",
                            score: (score - 1)});
             setTimeout(function(){that.setState({feedback: ""})}, 1000);
           }
         }
       }

  render() {
    let button;
    if (this.state.startButtonActive) {
      button = <button className="start" onClick={this.handleClick}>Click to Start</button>
    }
    return (
      <div className="joke-container centered">
        <h2>Riddle Quizzer</h2>
        <h5>Timer: 00:{this.state.hasZero}{this.state.timer}</h5>
        {button}
          <Joke joke={this.state.jokes} setupIndex={this.state.setupIndex}/>
          <List list={this.state.shuffled} compareId={this.compareId} timer={this.state.timer}/>
          {/* This could be its own component*/}
          <h3>Your score: {this.state.score}</h3>
          <h3>{this.state.feedback}</h3>
      </div>
    );
  }
}

export default App;


// Todo list:
// Allow the user to select an answer either by typing the letter or clicking on the component
// Add random heckles when the answers are wrong.
// Sound effects
// Show Correct Answers, Wrong Answers.
// Speed up the new joke time? Maybe move to the next joke right away. Alternate correct answers. Correct! You are right!
// so that they can see that they got it right even if the feedback hasn't disappeared yet.
// Add a tab where you can see a table of all jokes like the boostrap table you built for SLM.
// Include sort of jokes by date and length
// Also have filter by category and year.
// Allow user to rate jokes with 5 stars.
// Somehow incorporate some visual representations of the jokes.
