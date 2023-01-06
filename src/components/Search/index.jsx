import { useState } from "react";
import { StyledSearch } from "./style";

export default function Search({ loadData, lengthRepository }) {
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    setQuery(query);
    loadData(query);
  };

  return (
    <>
      {lengthRepository === 0 && query === "" ? null : (
        <StyledSearch>
          <div className="search">
            <label htmlFor="query">Procurar:</label>
            <input
              type="text"
              name="query"
              id="query"
              value={query}
              onChange={(e) => handleSearch(e.target.value.toLowerCase())}
            />
          </div>
          <div className="actions">
            <button onClick={() => handleSearch("")}>Limpar</button>
            {/* <button onClick={() => loadData(query)}>Procurar</button> */}
          </div>
        </StyledSearch>
      )}
    </>
  );
}
