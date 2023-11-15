import styled from 'styled-components';
import AppButtonDefault from '../../stories/components/buttons/AppButtonDefault';
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
  const handleDefaultClick = () => {
    console.log('default click');
  };

  return (
    <>
      <WrapperOnePage>
        <AppHeader />
        <main className="one">
          <h1 className="one__title">One</h1>
          <div className="one__buttons">
            <AppButtonDefault onClick={handleDefaultClick}>
              Default
            </AppButtonDefault>
            <ButtonOutline>Outline</ButtonOutline>
            <ButtonGradient>Gradient</ButtonGradient>
          </div>
        </main>
      </WrapperOnePage>
    </>
  );
}
