import { NavLink } from 'react-router-dom';

export const AppNavigation = () => {
  return (
    <nav className="app-navigation">
      <ul className="app-navigation__list">
        <li className="app-navigation__item">
          <NavLink to="/" className="app-navigation__link">
            One
          </NavLink>
        </li>
        <li className="app-navigation__item">
          <NavLink to="/two" className="app-navigation__link">
            Two
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
