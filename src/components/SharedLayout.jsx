import { Outlet, NavLink } from 'react-router-dom';

export default SharedLayout = () => {
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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
