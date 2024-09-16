import React from "react";
import useFetch from "../hooks/useGetFetch";

let stylebox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "red",
};

const Api = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (loading) {
    return <div style={stylebox}>Loading....</div>;
  }

  if (error) {
    return <div style={stylebox}>{error.message}</div>;
  }
  return (
    <div>
      {data && data.length > 0 ? (
        data.map((data) => {
          return (
            <div key={data.id} style={stylebox}>
              {data.id}
            </div>
          );
        })
      ) : (
        <div>No data available</div> // Optional: Handle case where data is empty
      )}
    </div>
  );
};

export default Api;
