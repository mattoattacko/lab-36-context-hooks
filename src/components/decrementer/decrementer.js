import React from "react";
import { SettingsContext } from "../settings/counter-context.js";
import "./button.scss";

class Decrementer extends React.Component {
  render() {
    return (
      <SettingsContext.Consumer>
        {context => {
          return (
            <button className="decrement" onClick={() => context.decrement()}>
              ↓
            </button>
          );
        }}
      </SettingsContext.Consumer>
    );
  }
}

export default Decrementer;
