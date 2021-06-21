import styled from 'styled-components';
import { Button } from '../globals/style';

export const TableHeaderDiv = styled.div`
  width: 90%;
  padding-bottom: 5rem;
  margin: 4rem auto 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #58365d;
`;

export const TableHeaderButton = styled(Button)`
  background: linear-gradient(#e765fe, #9758fe);
`;
