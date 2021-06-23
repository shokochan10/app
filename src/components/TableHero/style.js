import styled from 'styled-components';
import { Button } from '../globals/style';
import { BORDER, GRADIENT, SIZE, SPACE } from '../theme/style';

export const TableHeaderDiv = styled.div`
  width: ${SIZE['max-s-90']};
  padding-bottom: ${SPACE['sp-5']};
  margin: ${SPACE['sp-4']} ${SPACE['sp-auto']} ${SPACE['sp-1']};
  display: flex;
  justify-content: space-between;
  border-bottom: ${BORDER.purpleSolid};
`;

export const TableHeaderButton = styled(Button)`
  background-image: ${GRADIENT.pinkToPurple};
`;
