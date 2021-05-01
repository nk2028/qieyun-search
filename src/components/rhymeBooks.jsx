import React, { Component } from "react";

import RhymeBook from "./rhymeBook";

export default class RhymeBooks extends Component {
  render() {
    const { 韻書出處們 } = this.props;

    return (
      韻書出處們.length > 0 && (
        <React.Fragment>
          <h4>韻書</h4>
          {韻書出處們.map((韻書出處, index) => (
            <RhymeBook key={index} 韻書出處={韻書出處} />
          ))}
        </React.Fragment>
      )
    );
  }
}
