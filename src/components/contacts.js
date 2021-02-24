// src/components/contacts.js

import React from 'react'

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center><h1>Contact List</h1></center>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{contacts.setup}</h5>
          <h5 className="card-title">{contacts.punchline}</h5>

        </div>
      </div>
    </div>
  )
};

export default Contacts
