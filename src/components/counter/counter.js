import React from "react";
import { SettingsContext } from "../settings/counter-context.js";
import "./counter.scss";

class Counter extends React.Component {
  render() {
    return (
      <SettingsContext.Consumer>
        {context => {
          return <span className="number">{context.count}</span>;
        }}
      </SettingsContext.Consumer>
    );
  }
}

export default Counter;
