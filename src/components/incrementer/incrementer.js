import React from "react";
import { SettingsContext } from "../settings/counter-context.js";
import "../decrementer/button.scss";

class Decrementer extends React.Component {
  render() {
    return (
      <SettingsContext.Consumer>
        {context => {
          return (
            <button className="increment" onClick={() => context.increment()}>
              +
            </button>
          );
        }}
      </SettingsContext.Consumer>
    );
  }
}

export default Decrementer;
