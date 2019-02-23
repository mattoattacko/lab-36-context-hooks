import React from "react";

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement
    };
  }

  increment = event => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = event => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;
