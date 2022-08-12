import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import '../styles.css';

export default function SharedLayout() {
  return (
    <div
      style={{
        maxWidth: '1400px',
        minWidth: '768px',
        margin: 'auto',
      }}
    >
      <header>
        <nav>
          <NavLink className="NavLink" to="/">
            Home
          </NavLink>
          <NavLink className="NavLink" to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
