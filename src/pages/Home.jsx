import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [mainMovieList, setMainMovieList] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const fetchedMovies = await fetch(
        'https://api.themoviedb.org/3/trending/all/day?api_key=15d494776c3d35f24fb32811ec733217'
      )
        .then(r => r.json())
        .then(r => r.results)
        .catch(error => console.log(error));

      setMainMovieList([...fetchedMovies]);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {mainMovieList.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title ?? movie.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
