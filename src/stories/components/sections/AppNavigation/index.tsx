import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AppNavLink = styled(NavLink)`
  color: ${(props) => props.theme.text};
`;

export const AppNavigation = () => {
  return (
    <nav className="app-navigation">
      <ul className="app-navigation__list">
        <li className="app-navigation__item">
          <AppNavLink to="/" className="app-navigation__link">
            One
          </AppNavLink>
        </li>
        <li className="app-navigation__item">
          <AppNavLink to="/two" className="app-navigation__link">
            Two
          </AppNavLink>
        </li>
      </ul>
    </nav>
  );
};
