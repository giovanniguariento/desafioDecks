import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   outline:0;
   box-sizing: border-box;
 }

 html, body, #root{
   min-height: 100%;
 } 

 body{
  min-height: 100vh;
   background: #676EA3;
   font-size: 14px;
   -webkit-font-smoothing: antialiased !important;
   display: flex;
   align-items: center;
  justify-content: center;

 }

 body, input, button{
   color: #222;
   font-size: 14px;
   font-family: Arial, Helvetica, sans-serif;
 }

 button{
   cursor: pointer;
 }

 li {
  list-style:none;
 }

`;