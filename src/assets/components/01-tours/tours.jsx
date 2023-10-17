import React, { useState } from "react";
import "./tour.css";

import SingleTour from "./singleTour";
import useFetch from "../utils/useFetch";

const url = "https://course-api.com/react-tours-project";

export default function Tours() {
  const { loading, data, setData, fetchData } = useFetch(url);
  const [readMore, setRead] = useState(false);

  const removeData = (id) => {
    setData((oldData) => {
      let newVal = oldData.filter((value) => value.id !== id);
      return newVal;
    });
  };

  return (
    <>
      <main>
        {!loading ? (
          <>
            <div className="title">
              <h2>our tours</h2>
              <div className="underline"></div>
            </div>

            <SingleTour
              data={data}
              readMore={readMore}
              setRead={setRead}
              removeData={removeData}
              fetchData={fetchData}
            />
          </>
        ) : (
          <h1>Loading ...</h1>
        )}
      </main>
    </>
  );
}
