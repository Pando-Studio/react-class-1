import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FuseSearch from "./FuseSearch";

const FormFuse = () => {
  const [moviesData, setMoviesData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=a&language=fr-FR`
      )
      .then((res) => {
        setMoviesData(res.data.results);
      });
  }, []);

  return <div>{moviesData && <FuseSearch movies={moviesData} />}</div>;
};

export default FormFuse;
