import React, { Component } from "react";
import diamond1 from "./assets/diamond1.png";
export default class About extends Component {
  render() {
    return (
      <div className="row">
        <div className="ogo">
          <h1>This is About Page</h1>
          <img src={diamond1} alt="hihi"/>
        </div>
      </div>
    );
  }
}
