import React, { Component } from "react";
import NavBar from "./components/navbar";
import SearchBar from "./components/searchBar";
import Characters from "./components/characters";

export default class App extends Component {
  state = {
    characters: [],
    charactersSelectionIndex: 0,
  };

  handleSearch = (chars) => {
    if ([...chars].length > 10) {
      alert("請將單次檢索字符數限制在十個以內。");
      return;
    }

    const url =
      "https://ayaka-apps.shn.hk/qieyun/chars/?chars=" +
      encodeURIComponent(chars);

    fetch(url)
      .then((response) => response.json())
      .then((chars) => {
        this.setState({ characters: chars, charactersSelectionIndex: 0 });
      })
      .catch((err) => alert(err));
  };

  onCharactersSelectionIndexChange = (index) => {
    this.setState({ charactersSelectionIndex: index });
  };

  render() {
    const { handleSearch, onCharactersSelectionIndexChange } = this;
    const { charactersSelectionIndex } = this.state;

    return (
      <React.Fragment>
        <NavBar />
        <SearchBar handleSearch={handleSearch} />
        <Characters
          characters={this.state.characters}
          charactersSelectionIndex={charactersSelectionIndex}
          onCharactersSelectionIndexChange={onCharactersSelectionIndexChange}
        />
      </React.Fragment>
    );
  }
}
