import React from "react";
import "./style.css";
import Body from "./body";

export default function Review() {
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          <Body />
        </section>
      </main>
    </>
  );
}
