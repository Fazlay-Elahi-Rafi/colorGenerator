import React from "react";

export default function SingleTour({ data, readMore, setRead, removeData, fetchData }) {
  return (
    <>
      {data.length !== 0 ? (
        data.map((value) => {
          const { id, image, info, name, price } = value;
          return (
            <article key={id} className="single-tour">
              <img src={image} alt={name} />
              <footer>
                <div className="tour-info">
                  <h4>{name}</h4>
                  <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                  {readMore ? info : `${info.substring(0, 150)}...`}
                  <button onClick={() => setRead(!readMore)}>
                    {readMore ? "show less" : "  read more"}
                  </button>
                </p>
                <button className="delete-btn" onClick={() => removeData(id)}>
                  not interested
                </button>
              </footer>
            </article>
          );
        })
      ) : (
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      )}
    </>
  );
}
