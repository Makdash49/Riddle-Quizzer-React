// src/App.js

import React, { Component } from 'react';
import Contacts from './components/contacts';


class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
     fetch('https://official-joke-api.appspot.com/random_joke')
     .then(res => res.json())
     .then((data) => {
       this.setState({ contacts: data })
       console.log("Mark has retrieved some data: ", data)
     })
     .catch(console.log)
   }

  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }
}

export default App;
