import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Card from "./Card";

const QueryResults = ({ search }) => {
  console.log("test");
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="result">
      {isLoading && <div> LOADING </div>}
      {error && <div> error </div>}
      {data.results &&
        data.results.map((movie) => <Card movie={movie} key={movie.id} />)}
    </div>
  );
};

export default QueryResults;
