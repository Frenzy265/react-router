import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
*,*::before,*::after{
  box-sizing:border-box
}

body {
    margin: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* body {
  background: linear-gradient(135deg, #8f0000 0%, #4d0f0f 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;} */

ul {  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;}
  list-style: none;

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
