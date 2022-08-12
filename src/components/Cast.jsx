import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      const fetchedCredits = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=15d494776c3d35f24fb32811ec733217&language=en-US`
      )
        .then(r => r.json())
        .then(r => r.cast)
        .catch(error => console.log(error));
      setMovieCredits([...fetchedCredits]);
    };

    fetchCredits();
  }, [movieId]);

  return (
    <ul>
      {movieCredits.map(actor => (
        <li key={actor.cast_id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}` ?? ''}
            alt={actor.name ?? 'Unknown'}
          />
          <p>{actor.name ?? 'Unknown'}</p>
          <p>Character: {actor.character ?? 'Unknown'}</p>
          <hr />
        </li>
      ))}
    </ul>
  );
}
