import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const fetchedMovieDetails = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=15d494776c3d35f24fb32811ec733217`
      )
        .then(r => r.json())
        .catch(error => console.log(error));

      setMovieDetails(fetchedMovieDetails);
    };
    fetchMovieDetails();
  }, []);

  const { title, release_date, vote_average, overview, genres } = movieDetails;

  return (
    <main>
      <h1>
        {title} {release_date?.substring(0, 4)}
      </h1>
      <p>User score: {`${vote_average * 10}%`}</p>
      <img src="" alt={title} />
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{genres?.map(genre => `${genre.name} `)}</p>
    </main>
  );
}
