import { Component } from "react";

class ClearButton extends Component {
  render() {
    return (
      <button onClick={this.props.ClearVotes}>
        Clear
      </button>
    );
  }
}

export default ClearButton;