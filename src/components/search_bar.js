import React from 'react'
import ReactDOM from 'react-dom'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  handleOnInputChange(term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }

  render() {
    let term = this.state.term

    return (
      <div className="search-bar">
        <input 
          type="text" 
          value={term}
          onChange = {event => this.handleOnInputChange(event.target.value)}/>
      </div>
    )
  }
}