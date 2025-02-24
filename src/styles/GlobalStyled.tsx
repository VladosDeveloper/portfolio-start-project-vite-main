import { createGlobalStyle } from 'styled-components'
import { Theme } from './Theme'

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


body {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${Theme.colors.primaryBG};
  color: ${Theme.colors.font};
}

a {
    text-decoration: none;
}
ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
}


`
