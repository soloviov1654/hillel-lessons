import { Component } from "react";
import ResultButton from "./ResultButton";
import ClearButton from "./ClearButton";
import smile11 from "../img/1.png";
import smile22 from "../img/2.png";
import smile33 from "../img/3.png";
import smile44 from "../img/4.png";
import smile55 from "../img/5.png";

class Smiles extends Component {
  initialState = {
    smile1: 0,
    smile2: 0,
    smile3: 0,
    smile4: 0,
    smile5: 0,
  };

  state = { ...this.initialState, showResult: false };

  componentDidMount() {
    const savedVotes = localStorage.getItem("smilesVotes");
    if (savedVotes) {
      this.setState(JSON.parse(savedVotes));
    }
  }

  componentDidUpdate() {
    localStorage.setItem("smilesVotes", JSON.stringify(this.state));
  }

  VoteClick = (event) => {
    const id = event.target.dataset.id;
    this.setState({
      [id]: this.state[id] + 1,
    });
  };
  showResult = () => {
    this.setState({ showResult: true });
  };

  ClearVotes = () => {
    localStorage.removeItem("smilesVotes");
    this.setState(this.initialState);
  };

  render() {
    const { smile1, smile2, smile3, smile4, smile5, showResult } = this.state;

  let winner = "smile1";
  let max = smile1;

  if (smile2 > max) { winner = "smile2"; max = smile2; }
  if (smile3 > max) { winner = "smile3"; max = smile3; }
  if (smile4 > max) { winner = "smile4"; max = smile4; }
  if (smile5 > max) { winner = "smile5"; max = smile5; }
    return (
      <>
        <h1>Vote for a Smile</h1>

        <div className="d-flex">
          <div>
            <img src={smile11} data-id="smile1" onClick={this.VoteClick} />
            <p>{this.state.smile1}</p>
          </div>

          <div>
            <img src={smile22} data-id="smile2" onClick={this.VoteClick} />
            <p>{this.state.smile2}</p>
          </div>

          <div>
            <img src={smile33} data-id="smile3" onClick={this.VoteClick} />
            <p>{this.state.smile3}</p>
          </div>

          <div>
            <img src={smile44} data-id="smile4" onClick={this.VoteClick} />
            <p>{this.state.smile4}</p>
          </div>

          <div>
            <img src={smile55} data-id="smile5" onClick={this.VoteClick} />
            <p>{this.state.smile5}</p>
          </div>
        </div>
        <ResultButton onClick={this.showResult} />

      {showResult && (
        <p>
          Winner: {winner} with {max} votes
        </p>
      )}
        <ClearButton ClearVotes={this.ClearVotes} />
      </>
    );
  }
}

export default Smiles;
