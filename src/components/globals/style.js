import styled, { createGlobalStyle } from 'styled-components';
import { COLOR, BORDER, RADIUS, FONT, SIZE, SPACE } from '../theme/style';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: ${SPACE['sp-0']};
  padding:  ${SPACE['sp-0']};
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; 
}

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: ${FONT['fw-300']};
  max-width: ${SIZE['max-s-100']};
  background-color: ${COLOR['blue-500']};
}

ul {
  display: flex;
  list-style: none;
}

::-webkit-scrollbar {
  width: ${SPACE['sp-0.5']};
}
::-webkit-scrollbar-track {
  background: ${COLOR['blue-400']};
}
::-webkit-scrollbar-thumb {
  background: ${COLOR['gray-200']};
  border-radius: ${RADIUS.sm};
}
`;

export const Checkbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  appearance: none;
  padding: ${SPACE['sp-0.9']};
  border: ${BORDER.pinkDashed};
  border-radius: ${RADIUS.sm};
  display: inline-block;
  position: relative;
  margin-right: ${SPACE['sp-1.5']};
  &:hover {
    cursor: pointer;
  }
  &:checked {
    background-color: ${COLOR.darkPurple};
  }
`;

export const Subtitle = styled.p`
  font-size: ${FONT.xl};
  color: ${COLOR.main};
`;

export const Button = styled.button`
  padding: ${SPACE['sp-0.5']} ${SPACE['sp-3.5']};
  color: ${COLOR.main};
  border-radius: ${RADIUS.sm};
  border: ${BORDER.none};
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
