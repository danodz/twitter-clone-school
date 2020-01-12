import styled from 'styled-components';

const Button = styled.button`
  height: 40px;
  padding: 0 18px;
  border-radius: 20px;
  background: ${p => p.theme.colors.primary};
  color: white;
  font-weight: bold;
  font-size: 16px;
  opacity: 0.9;
  cursor: pointer;
  border: none;

  &:hover,
  &:focus {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.9;
    background: ${p => p.theme.colors.primaryAlpha};
    pointer-events: none;
  }
`;

export default Button;
