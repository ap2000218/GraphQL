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
    return <h1 className="text-3xl font-bold text-gray-600">Loading...</h1>;
  }
  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12">
      {data.books.map((book, index) => {
        return (
          <div key={index} className="mb-4 p-4 border border-gray-200 rounded">
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <p className="text-gray-600">{book.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayData;
