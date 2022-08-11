import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);

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

  return (
    <main>
      <form onSubmit={newQuery}>
        <input name="query" type="text" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {moviesList.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title ?? movie.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
