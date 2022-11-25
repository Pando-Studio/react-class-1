import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import QueryResults from "./QueryResults";

const FormQuery = () => {
  // const [moviesData, setMoviesData] = useState();
  const [search, setSearch] = useState("a");

  return (
    <div className="form-component">
      <h2> Form Query</h2>
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <QueryResults search={search} />
      </div>
    </div>
  );
};

export default FormQuery;
