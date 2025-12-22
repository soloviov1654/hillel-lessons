import { useState, useEffect } from "react";
import smile1 from "../assets/1.png";
import smile2 from "../assets/2.png";
import smile3 from "../assets/3.png";
import smile4 from "../assets/4.png";
import smile5 from "../assets/5.png";
import Results from "./Results";
import Clear from "./Clear";

function Smiles() {
  const [votes, setVotes] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ]);

  useEffect(() => {
    const savedVotes = localStorage.getItem("smilesVotes");
    if (savedVotes) {
      setVotes(JSON.parse(savedVotes));
    }
  }, []);

  const plusVote = (index) => {
    const newVotes = [...votes];
    newVotes[index].value += 1;
    setVotes(newVotes);
    localStorage.setItem("smilesVotes", JSON.stringify(newVotes));
  };

  return (
    <>
      <h1>Vote for a Smile</h1>

      <div className="d-flex">
        <div>
          <img src={smile1} onClick={() => plusVote(0)} />
          <p>{votes[0].value}</p>
        </div>

        <div>
          <img src={smile2} onClick={() => plusVote(1)} />
          <p>{votes[1].value}</p>
        </div>

        <div>
          <img src={smile3} onClick={() => plusVote(2)} />
          <p>{votes[2].value}</p>
        </div>

        <div>
          <img src={smile4} onClick={() => plusVote(3)} />
          <p>{votes[3].value}</p>
        </div>

        <div>
          <img src={smile5} onClick={() => plusVote(4)} />
          <p>{votes[4].value}</p>
        </div>
      </div>
      <Results votes={votes} />
      <Clear setVotes={setVotes} />
    </>
  );
}

export default Smiles;
