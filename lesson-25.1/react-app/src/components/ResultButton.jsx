import { Component } from "react";

class ResultButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Results
      </button>
    );
  }
}

export default ResultButton;