import React, { useState } from "react";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import people from "./data";

export default function Body() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const check = (indx) => {
    if (indx > people.length - 1) {
      return 0;
    }
    if (indx < 0) {
      return people.length - 1;
    }

    return indx;
  };

  const nextPerson = () => {
    setIndex((newIn) => {
      let newIndex = newIn + 1;
      return check(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((newIn) => {
      let newIndex = newIn - 1;
      return check(newIndex);
    });
  };

  const random = () => {
    let randomUser = Math.floor(Math.random() * people.length);

    if (randomUser === index) {
      randomUser = index + 1;
    }

    setIndex(check(randomUser));
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={random}>
          surprise me
        </button>
      </article>
    </>
  );
}
