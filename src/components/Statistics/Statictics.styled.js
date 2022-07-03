import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid ${p => p.theme.colors.border};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  width: 32%;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  :not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.border};
  }

  :nth-last-child(-n + 2) {
    border-top: 1px solid ${p => p.theme.colors.border};
    background-color: ${p => p.theme.colors.bg};
  }

  :nth-child(3n) {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.textSecondary};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Number = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
