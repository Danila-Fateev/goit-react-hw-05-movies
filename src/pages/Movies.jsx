import '../styles.css';

import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamInput = searchParams.get('inputValue') ?? '';
  const [query, setQuery] = useState(searchParamInput ?? '');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    const fetchQueryMovies = async () => {
      const fetchedQueryMovies = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=15d494776c3d35f24fb32811ec733217&query=${query}&page=1&include_adult=false`
      )
        .then(r => r.json())
        .then(r => r.results)
        .catch(error => console.log(error));
      setMoviesList([...fetchedQueryMovies]);
    };

    fetchQueryMovies();
  }, [query]);

  const newQuery = e => {
    e.preventDefault();
    const inputValue = e.target.elements.query.value;

    setQuery(inputValue);
  };

  const newParams = e => {
    const inputValue = e.target.value;
    const nextParams = inputValue !== '' ? { inputValue } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <form onSubmit={newQuery} className="SearchForm">
        <input
          name="query"
          type="text"
          onChange={newParams}
          value={searchParamInput}
        />
        <button type="submit" className="SearchButton">
          Search
        </button>
      </form>

      <ul>
        {moviesList.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title ?? movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
