function Clear({ setVotes }) {
  const handleClear = () => {
    localStorage.removeItem("smilesVotes");
    setVotes([
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ]);
  };

  return <button onClick={handleClear}>Clear</button>;
}

export default Clear;
