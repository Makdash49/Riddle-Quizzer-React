// src/components/contacts.js

import React from 'react'

const Joke = ({ joke, setupIndex }) => {
  return (
    <div>
      <center><h1>A Joke</h1></center>
          <h5 className="card-title">{(joke[setupIndex]) ? joke[setupIndex].setup : null}</h5>
    </div>
  )
};

export default Joke
