import ThemeToggle from '../../elements/ThemeToggle';
import { AppNavigation } from '../AppNavigation';

export default function AppHeader() {
  return (
    <header className="app-header">
      <AppNavigation />
      <ThemeToggle />
    </header>
  );
}
