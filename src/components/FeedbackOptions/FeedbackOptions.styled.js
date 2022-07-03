import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p =>
    p.label === 'good'
      ? p.theme.colors.green
      : p.label === 'neutral'
      ? p.theme.colors.blue
      : p.theme.colors.red};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }

  :hover {
    box-shadow: ${p => p.theme.shadows.card};
  }

  & > svg {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
