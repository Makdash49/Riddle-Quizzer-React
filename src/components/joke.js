// src/components/contacts.js

import React from 'react'

const Joke = ({ joke }) => {
  return (
    <div>
      <center><h1>A Joke</h1></center>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{joke.setup}</h5>
          <h5 className="card-title">{joke.punchline}</h5>

        </div>
      </div>
    </div>
  )
};

export default Joke
