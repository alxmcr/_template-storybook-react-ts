import styled from 'styled-components';
import { ButtonDefault } from '../../stories/components/buttons/ButtonDefault';
import { ButtonGradient } from '../../stories/components/buttons/ButtonGradient';
import { ButtonOutline } from '../../stories/components/buttons/ButtonOutline';
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
            <ButtonDefault>Default</ButtonDefault>
            <ButtonOutline>Outline</ButtonOutline>
            <ButtonGradient>Gradient</ButtonGradient>
          </div>
        </main>
      </WrapperOnePage>
    </>
  );
}
