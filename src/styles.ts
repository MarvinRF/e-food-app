import { createGlobalStyle } from 'styled-components'

export const colors = {
  beige: '#FFEBD9',
  lightBeige: '#FFF8F2',
  coral: '#E66767',
  white: '#ffffff'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  list-style: none;
  text-decoration: none ;
}
.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
body{
  background-color: ${colors.lightBeige};
  color: ${colors.coral};
}
`
