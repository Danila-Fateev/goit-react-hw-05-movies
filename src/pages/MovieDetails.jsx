import '../styles.css';

import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import { Suspense } from 'react';

export default function MovieDetails() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const fetchedMovieDetails = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=15d494776c3d35f24fb32811ec733217`
      )
        .then(r => {
          return r.json();
        })
        .catch(error => console.log('error'));

      setMovieDetails(fetchedMovieDetails);
    };

    fetchMovieDetails();
  }, [movieId]);

  const { title, release_date, vote_average, overview, genres, poster_path } =
    movieDetails;
  const userScore = Math.round(vote_average * 10);

  return (
    <main>
      <Link to={backLinkHref}>Go back</Link>
      {movieDetails && (
        <>
          <div className="MovieDetailsBox">
            <div className="ImageMovieBox">
              <img
                src={`https://image.tmdb.org/t/p/w400${poster_path}`}
                alt={title}
              />
            </div>
            <div className="TextMovieBox">
              <h1>
                {title} {`(${release_date?.substring(0, 4)})`}
              </h1>
              <p>User score: {`${userScore}%`}</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <p>{genres?.map(genre => `${genre.name} `)}</p>
            </div>
          </div>
          <hr />
          <p>Additional informaton</p>
          <ul>
            <li>
              <Link to="cast" state={{ from: backLinkHref }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
}
