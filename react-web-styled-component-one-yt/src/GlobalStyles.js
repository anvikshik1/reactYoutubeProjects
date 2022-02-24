import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle` 
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`

export const Container = styled.div` 
   width: 100%;
   max-width: 1320px;
   z-index: 1;
   margin-right: auto;
   margin-left: auto;
   padding-left: 50px;
   padding-right: 50px;

   @media screen and (max-width : 991px){
       padding-right: 30px;
       padding-left: 30px;
   }

`

export const Button = styled.button` 
    border-radius: 3px;
    background: ${({primary}) => (primary ? '#4b59f7' : '#0467fb') };
    white-space: nowrap;
    padding: ${({big}) => ( big ? '12px 64px': '10px 20px' )};
    font-size: ${({Bigfont}) => (Bigfont ? '20px' : '16px')};
    color:#fff;
    border:none;
    outline: none;
    cursor: pointer;

    &:hover{
        transition: all .3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#0467fb' : '#4b59f7') };
    }

    @media screen and (max-width : 960px){
       width: 100%;
   }
`
export default GlobalStyle;