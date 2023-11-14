import {
  DefaultButton,
  GradientButton,
  OutlineButton,
} from '../../components/elements/Button';
import { AppNavigation } from '../../components/sections/AppNavigation';
import './OnePage.css';

export default function OnePage() {
  return (
    <>
      <AppNavigation />
      <main className="one">
        <h1 className="one__title">One</h1>
        <div className="one__buttons">
          <DefaultButton>Default</DefaultButton>
          <OutlineButton>Outline</OutlineButton>
          <GradientButton>Gradient</GradientButton>
        </div>
      </main>
    </>
  );
}
