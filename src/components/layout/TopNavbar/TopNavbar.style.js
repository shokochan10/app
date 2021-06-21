import styled from 'styled-components';

export const TopBar = styled.ul`
  background: #2f3243;
  list-style: none;
  display: flex;
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
