export const AppNavigation = () => {
  return (
    <nav className="app-navigation">
      <ul className="app-navigation__list">
        <li className="app-navigation__item">
          <a href="/one" className="app-navigation__link">
            One
          </a>
        </li>
        <li className="app-navigation__item">
          <a href="/two" className="app-navigation__link">
            Two
          </a>
        </li>
      </ul>
    </nav>
  );
};
