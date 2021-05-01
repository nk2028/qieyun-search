import React, { Component } from "react";
import Entries from "./entries";

export default class Characters extends Component {
  state = {
    entriesSelectionIndex: 0,
  };

  onEntriesSelectionIndexChange = (index) => {
    this.setState({ entriesSelectionIndex: index });
  };

  render() {
    const { onEntriesSelectionIndexChange } = this;
    const {
      characters,
      charactersSelectionIndex,
      onCharactersSelectionIndexChange,
    } = this.props;
    const { entriesSelectionIndex } = this.state;

    return (
      <React.Fragment>
        <div className="border-bottom">
          {characters.map(({ 字頭 }, index) => (
            <input
              type="button"
              value={字頭}
              key={index}
              className={[
                "tab",
                charactersSelectionIndex === index && "tab-selected",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => {
                onCharactersSelectionIndexChange(index);
                this.setState({ entriesSelectionIndex: 0 });
              }}
            />
          ))}
        </div>
        {characters[charactersSelectionIndex] && (
          <Entries
            entries={characters[charactersSelectionIndex].條目們}
            entriesSelectionIndex={entriesSelectionIndex}
            onEntriesSelectionIndexChange={onEntriesSelectionIndexChange}
          />
        )}
      </React.Fragment>
    );
  }
}
