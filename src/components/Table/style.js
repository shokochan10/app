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

export const TableRow = styled.div`
  display: flex;
  width: ${SIZE['max-s-100']};
  padding: ${SPACE['sp-0.5']};
  border: ${BORDER.pinkDashed};
  border-radius: ${RADIUS.sm};
  ${({ header }) =>
    header &&
    `
      border: ${BORDER.none};
    `}

  ${({ clicked }) =>
    clicked &&
    `
      border: ${BORDER.none};
      box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.34);
    `}

  ${({ expanded }) =>
    expanded &&
    `
      width: ${SIZE['max-s-80']};
      justify-content: center;
      margin: ${SPACE['sp-m1']} ${SPACE['sp-auto']} 0;
      border: ${BORDER.none};
      background-color: ${COLOR['blue-600']};
    `}
`;

export const TableData = styled.div`
  display: flex;
  padding: ${SPACE['sp-2']} 0;
  flex: ${({ flex }) => flex || 1};
  align-items: center;
  ${({ header }) =>
    header &&
    `
      user-select: none;
      &:hover {
        cursor: pointer;
        color: ${COLOR.main};
      }
    `}

  ${({ isPrimary }) =>
    isPrimary &&
    `
      margin-left: 0.5rem;
    `}


  ${({ expanded }) =>
    expanded &&
    `
      justify-content: center;
      &:hover {
        background-color: ${COLOR['blue-300']};
        cursor: pointer;
        border-radius: ${RADIUS.med};
      }
    `}
  
  ${({ active }) =>
    active &&
    `
      color: ${COLOR.main};
    `}
`;

export const TableHeader = styled.div`
  display: flex;
  padding: ${SPACE['sp-2']} 0;
  flex: ${({ flex }) => flex || 1};
  align-items: center;
  color: ${COLOR['gray-300']};

  &:last-child {
    margin-right: ${SPACE['sp-3']};
  }
  ${({ header }) =>
    header &&
    `
      user-select: none;
      &:hover {
        cursor: pointer;
        color: ${COLOR.main};
      }
    `}

  ${({ isPrimary }) =>
    isPrimary &&
    `
      margin-left: ${SPACE['sp-0.5']};
    `}


  ${({ expanded }) =>
    expanded &&
    `
      justify-content: center;
      &:hover {
        background-color: ${COLOR['blue-300']};
        cursor: pointer;
        border-radius: ${RADIUS.med};
      }
    `}
  
  ${({ active }) =>
    active &&
    `
      color: ${COLOR.main};
    `}
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
`;
