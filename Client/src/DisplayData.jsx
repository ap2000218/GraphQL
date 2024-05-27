import { useQuery, gql } from "@apollo/client";
import React from "react";

const QUERY_ALL_DATA = gql`
  query {
    books {
      title
      author
    }
  }
`;
const DisplayData = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_DATA);

  if (loading) {
    return <h1>Loading... </h1>;
  }
  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }
  return <div>
    {data.books.map((book, index) => {
      return (
        <div key={index}>
          <h1>{book.title}</h1>
          <p>{book.author}</p>
        </div>
      );
    })}
  </div>;
};

export default DisplayData;
