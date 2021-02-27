// src/components/contacts.js

import React from 'react'

const List = ({ list }) => {
  return (
    <div>
      {list.map((contact) => (
        <button key={contact.punchline} className="Click-here">{contact.punchline}</button>

      ))}
    </div>
  )
};

export default List



// <h5 key={contact.punchline} className="card-title Click-here">{contact.punchline}</h5>
