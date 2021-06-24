import styled from 'styled-components';
import { COLOR, FONT, SPACE } from '../theme/style';

export const TopBar = styled.ul`
  background-color: ${COLOR['blue-200']};
  flex: 0 0 5%;
`;

export const TopBarItem = styled.li`
  font-size: ${FONT.lg};
  padding: ${SPACE['sp-2.5']};
  color: ${COLOR['gray-100']};
  &:first-child {
    margin-left: ${SPACE['sp-2']};
  }
  &:hover {
    background-color: ${COLOR['blue-300']};
    cursor: pointer;
  }
`;
