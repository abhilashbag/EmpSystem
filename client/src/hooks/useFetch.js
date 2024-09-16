import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setErrors(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error found ${response.status}`);
        }
        const data = await response.json();

        setData(data);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, errors };
};

export default useFetch;
