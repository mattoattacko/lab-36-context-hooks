import React from "react";
import Style from "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Seahawks Fan Counter</h1>
        <p>push the ↑ button to make the fan counter go up!</p>
      </header>
    );
  }
}

export default Header;
