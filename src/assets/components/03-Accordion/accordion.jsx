import React, { useState } from "react";
import "./style.css";

import Data from "./data";
import SingleItem from "./singleItem";

export default function Accordion() {
  const [data, setData] = useState(Data);
  return (
    <>
      <main>
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {data.map((question) => {
              return <SingleItem key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
}
