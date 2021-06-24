import styled from 'styled-components';
import { COLOR, GRADIENT, FONT, SIZE, SPACE } from '../theme/style';

export const SideBar = styled.ul`
  flex-direction: column;
  flex: 0 0 10%;
  background-color: ${COLOR['blue-400']};
`;

export const SideBarItem = styled.li`
  position: relative;
  &:first-child {
    margin-top: ${SPACE['sp-4']};
  }
  &:last-child {
    &::before {
      content: '';
      display: block;
      width: ${SIZE['s-0.5']};
      height: ${SIZE['max-s-100']};
      background-image: ${GRADIENT.pinkToPurple};
      position: absolute;
      left: ${SPACE['sp-0']};
      top: ${SPACE['sp-0']};
    }
  }
  &:hover {
    background-color: ${COLOR['blue-300']};
  }
`;

export const SideBarItemLink = styled.a`
  color: ${COLOR['gray-300']};
  padding: ${SPACE['sp-2']} ${SPACE['sp-3']};
  font-size: ${FONT.med};
  display: flex;
  align-items: center;
  text-decoration: none;
`;
