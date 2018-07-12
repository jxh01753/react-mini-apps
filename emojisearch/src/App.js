import React, { Component } from "react";
import Search from "./components/Search.jsx";
import List from "./components/List.jsx";
import "./App.css";

class App extends Component {
  state = {
    searchTerm: ""
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Emoji Searcher!</h1>
        </header>
        <Search changeSearchTerm={this.changeSearchTerm} />
        <List itemsToDisplay={this.state.searchTerm} />
      </div>
    );
  }

  changeSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };
}

export default App;
