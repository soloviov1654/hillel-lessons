import { useState } from "react";

function Results({ votes }) {
  const [winner, setWinner] = useState("");

  const calcWinner = () => {
    let max = 0;
    let index = -1;

    for (let i = 0; i < votes.length; i++) {
      if (votes[i].value > max) {
        max = votes[i].value;
        index = i;
      }
    }

    if (max === 0) {
      setWinner("Nobody voted");
    } else {
      setWinner(`Winner is smile ${index + 1}`);
    }
  };

  return (
    <>
      <button onClick={calcWinner}>Results</button>
      <h2>{winner}</h2>
    </>
  );
}

export default Results;