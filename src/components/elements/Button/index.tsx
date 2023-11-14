import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const DefaultButton = styled(Button)`
  background-color: #21aa33;
  border: 1px solid #21aa33;
  color: #fff;

  &:hover {
    background-color: #91aa33;
    border: 1px solid #91aa33;
    color: #fff;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #04aabb;
  color: #04aabb;

  &:hover {
    background-color: #ee2211;
    border: 1px solid #ee2211;
    color: #fff;
  }
`;

export const GradientButton = styled(Button)`
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  border: 1px solid #54aabb;
  color: #fff;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    border: 1px solid #54aabb;
    color: #fff;
  }
`;
