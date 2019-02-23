import React from "react";
import SettingsContext from "./components/settings/counter-context.js";
import Decrementer from "./components/decrementer/decrementer.js";
import Counter from "./components/counter/counter.js";
import Incrementer from "./components/incrementer/incrementer.js";
import "./app.scss";

export default class App extends React.Component {
  render() {
    return (
      <SettingsContext>
        <section className="main-section">
          <Decrementer />
          <Counter />
          <Incrementer />
        </section>
      </SettingsContext>
    );
  }
}
