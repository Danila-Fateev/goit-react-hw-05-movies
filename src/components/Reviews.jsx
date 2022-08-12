import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=15d494776c3d35f24fb32811ec733217&language=en-US&page=1`
      )
        .then(r => r.json())
        .then(r => r.results)
        .catch(error => console.log(error));
      setReviewsList([...fetchedReviews]);
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviewsList.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {reviewsList.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
