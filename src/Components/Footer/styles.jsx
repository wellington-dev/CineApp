import styled from "styled-components";

export const Container = styled.div`
     
    border-top: 1px solid ${({theme})=>theme.colors.orange};
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({theme})=>theme.colors.footer_black};
`

export const FooterInfor = styled.div`
   
    img{
        width:60px;
    }
`

export const Footertext = styled.footer`

    display: flex;
    padding:15px;
    color:#fff;
    font-family:${({theme})=>theme.fonts[1]};

    .footer-color{
        font-family:${({theme})=>theme.fonts[0]};
        text-shadow: 2px 1px 5px ${({theme})=>theme.colors.white};

        color:${({theme})=>theme.colors.red};
        font-weight: bold;
    }
`