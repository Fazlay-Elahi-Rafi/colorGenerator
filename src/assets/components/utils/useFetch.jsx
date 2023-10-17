import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(url);

      const response = await resp.json();
      setData(response);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, data, setData, fetchData };
}
