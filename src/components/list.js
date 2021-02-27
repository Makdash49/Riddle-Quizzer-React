// // src/components/contacts.js
//
// import React from 'react'
//
// const List = ({ list }) => {
//   handleClick() {
//     console.log("Someone clicked a punchline!!!")
//   }
//
//   return (
//     <div>
//       {list.map((contact) => (
//         <button key={contact.punchline} className="Click-here" onClick={this.handleClick}>{contact.punchline}</button>
//
//       ))}
//     </div>
//   )
// };
//
// export default List



// <h5 key={contact.punchline} className="card-title Click-here">{contact.punchline}</h5>
import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(e) {
    // const name = e.target.value;
    // this.props.onChange(name);

    console.log("id: ", e.target.attributes.id.value)
  }

  render() {
    return (
      <div>
        {this.props.list.map((contact) => (
          <button key={contact.punchline} className="Click-here" onClick={this.handleAnswer} id={contact.id}>{contact.punchline}</button>

        ))}
      </div>
    )
  }
}

export default List
