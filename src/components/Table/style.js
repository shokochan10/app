import styled from 'styled-components';
import { BORDER, COLOR, RADIUS, FONT, SIZE, SPACE } from '../theme/style';

export const TableContainer = styled.div`
  width: ${SIZE['max-s-90']};
  margin: ${SPACE['sp-0']} ${SPACE['sp-auto']};
  text-align: left;
`;

export const TableRowContainer = styled.div`
  display: flex;
  margin: ${SPACE['sp-1']} ${SPACE['sp-auto']};
  font-size: ${FONT.med};
`;

export const StyledTR = styled.div`
  display: flex;
  width: ${SIZE['max-s-100']};
  padding: ${SPACE['sp-0.5']};
  border: ${BORDER.pinkDashed};
  border-radius: ${RADIUS.sm};
  ${({ clicked }) =>
    clicked &&
    `
      border: ${BORDER.none};
      box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.34);
    `}
`;
export const StyledDropdownMenu = styled.div`
  display: flex;
  padding: ${SPACE['sp-0.5']};
  border-radius: ${RADIUS.sm};
  width: ${SIZE['max-s-80']};
  justify-content: center;
  margin: ${SPACE['sp-m1']} ${SPACE['sp-auto']} 0;
  border: ${BORDER.none};
  background-color: ${COLOR['blue-600']};
`;

export const StyledHead = styled.div`
  display: flex;
  width: ${SIZE['max-s-100']};
  padding: ${SPACE['sp-0.5']};
  border: ${BORDER.none};
`;

export const StyledTD = styled.div`
  display: flex;
  padding: ${SPACE['sp-2']} 0;
  flex: ${({ flex }) => flex || 1};
  align-items: center;
  ${({ isPrimary }) =>
    isPrimary &&
    `
      margin-left: ${SPACE['sp-0.5']};
    `}
`;
export const StyledDropdownCell = styled(StyledTD)`
  justify-content: center;
  &:hover {
    background-color: ${COLOR['blue-300']};
    cursor: pointer;
    border-radius: ${RADIUS.med};
  }
`;

export const StyledTH = styled(StyledTD)`
  user-select: none;
  &:hover {
    cursor: pointer;
    color: ${COLOR.main};
  }
  &:last-child {
    margin-right: ${SPACE['sp-3']};
  }
`;

const handleFontType = (font) => {
  switch (font) {
    case 'bold':
      return `font-weight: ${FONT['fw-b']}; font-size: ${FONT.lg}`;
    case 'first':
      return `font-size: ${FONT.lx}`;
    case 'header':
      return `font-size: ${FONT.med}; font-weight: ${FONT['fw-b']}`;
    default:
      return `font-size: ${FONT.lg}`;
  }
};

const handleColorType = (color) => {
  switch (color) {
    case 'white':
      return `color: ${COLOR.main}`;
    default:
      return `color: ${COLOR['gray-300']}`;
  }
};

export const TableText = styled.p`
  ${({ color }) => handleColorType(color)};
  ${({ font }) => handleFontType(font)};
  ${({ active }) =>
    active &&
    `
      color: ${COLOR.main};
    `}
`;
