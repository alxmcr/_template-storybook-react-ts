import styled from 'styled-components';
import AppHeader from '../../stories/components/sections/AppHeader';

const WrapperTwoPage = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 100vh;
`;

export default function TwoPage() {
  return (
    <>
      <WrapperTwoPage>
        <AppHeader />
        <main className="two">
          <h1 className="two__title">Two</h1>
        </main>
      </WrapperTwoPage>
    </>
  );
}
