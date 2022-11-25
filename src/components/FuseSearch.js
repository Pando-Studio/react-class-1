import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import Fuse from "fuse.js";

const FuseSearch = ({ movies }) => {
  const [search, setSearch] = useState("a");
  const [results, setResults] = useState();

  const fuse = new Fuse(movies, {
    keys: ["title"],
  });

  useEffect(() => {
    const res = fuse.search(search);
    setResults(res);
  }, [search]);

  return (
    <div className="form-component">
      <h2> Form Fuse</h2>
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
      </div>
      <div className="result">
        {results &&
          results.map((item) => <Card movie={item.item} key={item.item.id} />)}
      </div>
    </div>
  );
};

export default FuseSearch;
