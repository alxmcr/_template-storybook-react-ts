import styled from 'styled-components';
import { ButtonDefault } from '../../stories/components/buttons/ButtonSolid';
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

  const handleOutlineClick = () => {
    console.log('Outline click');
  };

  const handleGradientClick = () => {
    console.log('Gradient click');
  };

  return (
    <>
      <WrapperOnePage>
        <AppHeader />
        <div className="one-container">
          <h1 className="one__title">One</h1>

          <section className="one-section">
            <h2 className="one__subtitle">Default button</h2>
            <div className="one__buttons">
              <div className="one__wrapper">
                <h3 className="one__h3">Default state</h3>
                <ButtonDefault onClick={handleDefaultClick}>
                  Default
                </ButtonDefault>
              </div>
              <div className="one__wrapper">
                <h3 className="one__h3">Disabled state</h3>
                <ButtonDefault onClick={handleDefaultClick} disabled>
                  Disabled
                </ButtonDefault>
              </div>
            </div>
          </section>

          <hr />

          <section className="one-section">
            <h2 className="one__subtitle">Outline button</h2>
            <div className="one__buttons">
              <div className="one__wrapper">
                <h3 className="one__h3">Default state</h3>
                <ButtonOutline onClick={handleDefaultClick}>
                  Default
                </ButtonOutline>
              </div>
              <div className="one__wrapper">
                <h3 className="one__h3">Disabled state</h3>
                <ButtonOutline onClick={handleDefaultClick} disabled>
                  Disabled
                </ButtonOutline>
              </div>
            </div>
          </section>

          <hr />

          <section className="one-section"></section>
          <section className="one-section"></section>

          <main className="one">
            <div className="one__buttons">
              <ButtonDefault onClick={handleDefaultClick}>
                Default
              </ButtonDefault>
              <ButtonOutline onClick={handleOutlineClick}>
                Outline
              </ButtonOutline>
              <ButtonGradient onClick={handleGradientClick}>
                Gradient
              </ButtonGradient>
            </div>
          </main>
        </div>
      </WrapperOnePage>
    </>
  );
}
