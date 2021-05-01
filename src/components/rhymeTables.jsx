import React, { Component } from "react";

import RhymeTable from "./rhymeTable";

export default class RhymeTables extends Component {
  render() {
    const { 韻圖出處們 } = this.props;

    return (
      韻圖出處們.length > 0 && (
        <React.Fragment>
          <h4>韻圖</h4>
          {韻圖出處們.map((韻圖出處, index) => (
            <RhymeTable key={index} 韻圖出處={韻圖出處} />
          ))}
        </React.Fragment>
      )
    );
  }
}
