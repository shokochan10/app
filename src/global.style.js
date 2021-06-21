import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

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

export default GlobalStyle;
