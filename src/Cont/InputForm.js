import React, { useState } from "react";
import "./InputForm.css";
import Display from "./Display";

function InputForm() {
  const [inputValues, setInputValues] = useState({
    relation: "",
    occasion: "",
    interest: "",
    budget: 0,
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: name === "budget" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValues);
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Who it's for?
            <br />
            <input
              required
              type="text"
              name="relation"
              placeholder="Relation"
              value={inputValues.relation}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            What is the occasion?
            <br />
            <input
              required
              type="text"
              name="occasion"
              placeholder="Occasion"
              value={inputValues.occasion}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="interest">
            What do they like? <br />
            <select
              required
              name="interest"
              id="interest"
              value={inputValues.interest}
              onChange={handleInputChange}
              placeholder="Interest"
            >
              <option value="interest" selected hidden>
                Interest
              </option>
              <option value="football">Football</option>
              <option value="cricket">Cricket</option>
              <option value="music">Music</option>
              <option value="photography">Photography</option>
              <option value="cooking">Cooking</option>
              <option value="art">Art</option>
              <option value="reading">Reading</option>
              <option value="technology">Technology</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            What is your budget ($) ?
            <br />
            <input
              required
              type="number"
              name="budget"
              min="10"
              max="100"
              value={inputValues.budget}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <Display
        who={inputValues.relation}
        onwhat={inputValues.occasion}
        category={inputValues.interest}
        dollor={inputValues.budget}
        onSubmit={handleSubmit}
        message={message}
      />
      <p className="footer">© 2023 Surajk7841 · All Rights Reserved</p>
    </div>
  );
}

export default InputForm;
