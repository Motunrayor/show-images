import React, { Component } from "react";

class Search extends Component {
  state = { term: "" };
  handleSubmit= (e) => {
      e.preventDefault();
      this.props.runSubmit(this.state.term)
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="search">
            <label>Search Images</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
