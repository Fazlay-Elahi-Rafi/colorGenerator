import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function SingleItem({ title, info }) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setToggle(!toggle)}>
            {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {toggle && <p>{info}</p>}
      </article>
    </>
  );
}
