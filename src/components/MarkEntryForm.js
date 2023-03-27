import React, { useState } from "react";

function StudentForm(props) {
  const [name, setName] = useState("");
  const [mathScore, setMathScore] = useState(0);
  const [englishScore, setEnglishScore] = useState(0);
  const [scienceScore, setScienceScore] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMathScoreChange = (event) => {
    setMathScore(parseInt(event.target.value));
  };

  const handleEnglishScoreChange = (event) => {
    setEnglishScore(parseInt(event.target.value));
  };

  const handleScienceScoreChange = (event) => {
    setScienceScore(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      mathScore: mathScore,
      englishScore: englishScore,
      scienceScore: scienceScore,
    };
    props.onFormSubmit(data);
    setName("");
    setMathScore(0);
    setEnglishScore(0);
    setScienceScore(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label><br/>
      <label>
        Math Score:
        <select value={mathScore} onChange={handleMathScoreChange}>
          <option value="0">Select a score</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label><br/>
      <label>
        English Score:
        <select value={englishScore} onChange={handleEnglishScoreChange}>
          <option value="0">Select a score</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label><br/>
      <label>
        Science Score:
        <select value={scienceScore} onChange={handleScienceScoreChange}>
          <option value="0">Select a score</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label><br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
