import styled from 'styled-components';
import { Svg, Ul } from '../globals/style';

export const SideBar = styled(Ul)`
  flex-direction: column;
  flex: 0 0 10%;
  background-color: #1a1b25;
`;

export const SideBarItem = styled.li`
  position: relative;
  &:first-child {
    margin-top: 4rem;
  }
  &:last-child {
    &::before {
      content: '';
      display: block;
      width: 0.5rem;
      height: 100%;
      background: linear-gradient(#e765fe, #9758fe);
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  &:hover {
    background-color: #222633;
  }
`;

export const SideBarItemLink = styled.a`
  color: #6e6d6f;
  padding: 2rem 3rem;
  font-size: 1.3rem;

  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const SideBarSvg = styled(Svg)`
  margin-right: 2rem;
  fill: #6e6d6f;
`;
