import styled from "styled-components"

export const LogoContainer = styled.div`
    display: inline-block;

    font-size:${({theme})=>theme.fontSizes.medium};
    padding-right: 10px;
    display: flex;

    font-family:${({theme})=>theme.fonts[0]};
    text-shadow:0 2px 1px ${({theme})=>theme.colors.white} ;
    z-index: 1;

    a{
        color:${({theme})=>theme.colors.white};
    }
    
    span{
        text-shadow:0 2px 1px ${({theme})=>theme.colors.red};
        background:${({theme})=>theme.colors.red};
        background-clip: text;
        
        -webkit-background-clip: text;
        color: transparent;
    }

    @media(max-width: 1035px){
    width:${({theme})=>theme.fontSizes.small};
    position: absolute;
    left:50%;

    display:flex;
    justify-content: center;
    align-items: center;
    }
`