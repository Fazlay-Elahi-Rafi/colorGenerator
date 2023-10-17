import React, { useState } from "react";
import useFetch from "../utils/useFetch";
import "./style.css";

import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

export default function Tabs() {
  const { loading, data } = useFetch(url);
  const [value, setValue] = useState(0);

  if (data.length > 0) {
    const { company, dates, duties, title } = data[value];

    return (
      <>
        <section className="section">
          {!loading ? (
            <>
              <div className="title">
                <h2>experience</h2>
                <div className="underline"></div>
              </div>
              <div className="jobs-center">
                <div className="btn-container">
                  {data.map((item, index) => {
                    return (
                      <button
                        key={item.id}
                        onClick={() => setValue(index)}
                        className={`job-btn ${index === value && "active-btn"}`}
                      >
                        {item.company}
                      </button>
                    );
                  })}
                </div>
                <article className="job-info">
                  <h3>{title}</h3>
                  <h4>{company}</h4>
                  <p className="job-date">{dates}</p>
                  {duties.map((duty, index) => {
                    return (
                      <div key={index} className="job-desc">
                        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                        <p>{duty}</p>
                      </div>
                    );
                  })}
                </article>
              </div>
              <button type="button" className="btn">
                more info
              </button>
            </>
          ) : (
            <section className="section loading">
              <h1>Loading...</h1>
            </section>
          )}
        </section>
      </>
    );
  }
}
