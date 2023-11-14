import styled from 'styled-components';
import {
  DefaultButton,
  GradientButton,
  OutlineButton,
} from '../../stories/components/elements/Button';
import AppHeader from '../../stories/components/sections/AppHeader';
import './OnePage.scss';

const WrapperOnePage = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 100vh;
`;

export default function OnePage() {
  return (
    <>
      <WrapperOnePage>
        <AppHeader />
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
