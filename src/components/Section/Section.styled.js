import styled from 'styled-components';

export const Heading = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-transform: capitalize;
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
