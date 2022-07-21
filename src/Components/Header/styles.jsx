import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    max-width:2110px;
    margin:auto;
`

export const NavBar = styled.div`
    display:flex;
    align-items: center;
    width:87%;

    height:${({theme})=>theme.fontSizes.large};
    margin:0 auto;
`

export const NavMenu = styled.div`
    width:100%;
    display:flex;

`

export const HamburgueMenu = styled.span`
   
    height:${({theme})=>theme.fontSizes.sub_small};  
    width:${({theme})=>theme.fontSizes.medium};
    z-index: 1;
    display:none;
    cursor: pointer;
    justify-content:space-between;
    flex-flow: column nowrap;

    
    span{
      width:${({theme})=>theme.fontSizes.medium};
      height: 0.2rem;  /*3px*/
      background-color:${({click})=> click ? '#f00' : '#fff'};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s ease;

      &:nth-child(1){
        transform:${({click})=> click ? 'rotate(45deg)' : 'rotate(0)'} ;
        padding:2px;
      }
      &:nth-child(2){
        transform:${({click})=> click ? 'trasnlateX(100%)' : 'trasnlateX(0)'} ;
        opacity: ${({click})=> click ? 0 : 1};
      }
      &:nth-child(3){
        transform:${({click})=> click ? 'rotate(-45deg)' : 'rotate(0)'} ;
        background-color:${({click})=> click ? '#fff' : '#fff'};
      }

    }
  
    @media(max-width: 1035px){
      display:flex;
    }


`