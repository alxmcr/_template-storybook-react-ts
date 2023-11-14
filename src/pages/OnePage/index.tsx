import styled from 'styled-components';
import {
  DefaultButton,
  GradientButton,
  OutlineButton,
} from '../../stories/components/elements/Button';
import { AppNavigation } from '../../stories/components/sections/AppNavigation';
import './OnePage.scss';

const WrapperOnePage = styled.div`
  background-color: #fff;
  color: #000;
  height: 100vh;
`;

export default function OnePage() {
  return (
    <>
      <WrapperOnePage>
        <AppNavigation />
        <main className="one">
          <h1 className="one__title">One</h1>
          <div className="one__buttons">
            <DefaultButton>Default</DefaultButton>
            <OutlineButton>Outline</OutlineButton>
            <GradientButton>Gradient</GradientButton>
          </div>
        </main>
      </WrapperOnePage>
    </>
  );
}
