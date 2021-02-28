import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(e) {
    const id = e.target.attributes.id.value;
    this.props.compareId(id);
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
