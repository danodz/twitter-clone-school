import styled from 'styled-components';

const Button = styled.button`
  height: 40px;
  padding: 0 18px;
  border-radius: 20px;
  background: ${p =>
    p.type === 'secondary' ? 'transparent' : p.theme.colors.primary};
  color: ${p => (p.type === 'secondary' ? p.theme.colors.primary : 'white')};
  font-weight: bold;
  font-size: 16px;
  opacity: 0.9;
  cursor: pointer;
  border: ${p =>
    p.type === 'secondary' ? `1px solid ${p.theme.colors.primary}` : 'none'};

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
