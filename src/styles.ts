import { createGlobalStyle } from 'styled-components'

export const colors = {
  darkPink: '#E66767',
  white: '#FFFFFF',
  lightPink: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  list-style: none;
}
.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
body{
  background-color: ${colors.white};
  color: ${colors.darkPink};
}
`
