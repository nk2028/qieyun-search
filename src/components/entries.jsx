import React, { Component } from "react";
import BasicInfo from "./basicInfo";
import RhymeBooks from "./rhymeBooks";
import RhymeTables from "./rhymeTables";

export default class Entries extends Component {
  render() {
    const {
      entries,
      entriesSelectionIndex,
      onEntriesSelectionIndexChange,
    } = this.props;
    const displayedEntry = entries[entriesSelectionIndex];

    return (
      <React.Fragment>
        <div className="border-bottom">
          {entries.map(({ 描述 }, index) => (
            <input
              type="button"
              value={描述}
              key={index}
              className={[
                "tab",
                entriesSelectionIndex === index && "tab-selected",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onEntriesSelectionIndexChange(index)}
            />
          ))}
        </div>
        <div className="container-fluid row">
          {displayedEntry && (
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-3">
              <BasicInfo 描述={displayedEntry.描述} />
            </div>
          )}
          {displayedEntry && (
            <div className="col-xs-12 col-sm-7 col-md-8 col-lg-9">
              <RhymeBooks 韻書出處們={displayedEntry.韻書出處們} />
              <RhymeTables 韻圖出處們={displayedEntry.韻圖出處們} />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
