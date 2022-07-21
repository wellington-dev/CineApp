import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }

   
  body{
    background-color:${({theme})=>theme.colors.primary}; 
  }
`
export default GlobalStyles