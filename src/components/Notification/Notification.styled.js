import styled from 'styled-components';

export const Message = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.textSecondary};
  text-align: center;
`;
