import styled from 'styled-components';
import { ButtonOutline } from '../../stories/components/buttons/ButtonOutline';
import { ButtonSolid } from '../../stories/components/buttons/ButtonSolid';
import AppHeader from '../../stories/components/sections/AppHeader';
import './OnePage.scss';
import { ButtonGradient } from '../../stories/components/buttons/ButtonGradient';

const WrapperOnePage = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 100vh;
`;

export default function OnePage() {
  const handleDefaultClick = () => {
    console.log('Default click');
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
                <ButtonSolid onClick={handleDefaultClick}>Default</ButtonSolid>
              </div>
              <div className="one__wrapper">
                <h3 className="one__h3">Disabled state</h3>
                <ButtonSolid onClick={handleDefaultClick} disabled>
                  Disabled
                </ButtonSolid>
              </div>
            </div>
          </section>

          <hr />

          <section className="one-section">
            <h2 className="one__subtitle">Outline button</h2>
            <div className="one__buttons">
              <div className="one__wrapper">
                <h3 className="one__h3">Default state</h3>
                <ButtonOutline onClick={handleOutlineClick}>
                  Default
                </ButtonOutline>
              </div>
              <div className="one__wrapper">
                <h3 className="one__h3">Disabled state</h3>
                <ButtonOutline onClick={handleOutlineClick} disabled>
                  Disabled
                </ButtonOutline>
              </div>
            </div>
          </section>

          <hr />

          <section className="one-section">
            <h2 className="one__subtitle">Gradient button</h2>
            <div className="one__buttons">
              <div className="one__wrapper">
                <h3 className="one__h3">Default state</h3>
                <ButtonGradient onClick={handleGradientClick}>
                  Default
                </ButtonGradient>
              </div>
              <div className="one__wrapper">
                <h3 className="one__h3">Disabled state</h3>
                <ButtonGradient onClick={handleGradientClick} disabled>
                  Disabled
                </ButtonGradient>
              </div>
            </div>
          </section>
        </div>
      </WrapperOnePage>
    </>
  );
}
