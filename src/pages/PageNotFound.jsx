import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <main>
      <h1>Sorry, page not found. {<Link to="/">Go to the main page</Link>}</h1>
    </main>
  );
}
