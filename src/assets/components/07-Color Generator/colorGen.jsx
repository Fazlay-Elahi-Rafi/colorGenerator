import React, { useState, useEffect } from "react";
import "./style.css";
import Values from "values.js";

import SingleColor from "./singleColor";

export default function ColorGen() {
  const [color, setColor] = useState("");
  const [targetColor, setTarget] = useState(5);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(targetColor));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(targetColor);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    let totalTarget = parseInt(targetColor);

    if (targetColor <= 0) {
      totalTarget = 5;
    } else {
      totalTarget = parseInt(targetColor);
    }

    setTarget(totalTarget);
  }, [targetColor]);


  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
            style={{ border: "1px solid #8d8d8d" }}
          />

          <input
            type="number"
            value={targetColor}
            onChange={(e) => setTarget(e.target.value)}
            className={`${error ? "error" : null}`}
            style={{ border: "1px solid #198d19", margin: "0 1rem" }}
          />

          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}
