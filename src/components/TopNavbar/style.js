import styled from 'styled-components';
import { Ul } from '../globals/style';

export const TopBar = styled(Ul)`
  background: #2f3243;
  flex: 0 0 5%;
`;

export const TopBarItem = styled.li`
  font-size: 1.5rem;
  padding: 2.5rem;
  color: #eee;
  &:first-child {
    margin-left: 2rem;
  }
  &:hover {
    background: #222633;
    cursor: pointer;
  }
`;
