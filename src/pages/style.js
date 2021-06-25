import styled from 'styled-components';
import { COLOR, SIZE, SPACE } from '../components/theme/style';

export const ContentWrapper = styled.div`
  background-color: ${COLOR['blue-300']};
  width: ${SIZE['max-s-100']};
  margin: ${SPACE['sp-2']};
`;

export const PageWrapper = styled.div`
  height: ${SIZE['s-100-vh']};
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
`;
