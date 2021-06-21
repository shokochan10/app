import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; 
}

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  max-width: 100%;
  background-color: #1B1C26;
}

::-webkit-scrollbar {
  width: .5rem;
}

::-webkit-scrollbar-track {
  background: #1A1B25;
}

::-webkit-scrollbar-thumb {
  background: #818281;
  border-radius: 0.5rem;
}
`;

export const Text = styled.p`
  font-size: 1.5rem;
`;

export const Svg = styled.svg`
  height: 2rem;
  width: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Checkbox = styled.input`
  appearance: none;
  padding: 9px;
  border: 1px dashed #833ab4;
  border-radius: 0.5rem;
  display: inline-block;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &:checked {
    background-color: #833ab4;
  }
`;

export const Subtitle = styled.p`
  font-size: 3rem;
  color: #fff;
`;

export const Button = styled.button`
  padding: 0.5rem 3.5rem;
  color: #fff;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

export const ContentWrapper = styled.div`
  background-color: #222633;
  width: 100%;
  margin: 2rem;
`;

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
`;
