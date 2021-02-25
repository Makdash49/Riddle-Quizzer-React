// src/components/contacts.js

import React from 'react'

const Joke = ({ joke }) => {
  return (
    <div>
      <center><h1>A Joke</h1></center>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{(joke[0]) ? joke[0].setup : null}</h5>
          <h5 className="card-title">{(joke[0]) ? joke[0].punchline : null}</h5>
        </div>
      </div>
    </div>
  )
};

export default Joke
