// src/components/contacts.js

import React from 'react'

const List = ({ list }) => {
  return (
    <div>
      {list.map((contact) => (
            <h5 key={contact.punchline} className="card-title">{contact.punchline}</h5>
      ))}
    </div>
  )
};

export default List
