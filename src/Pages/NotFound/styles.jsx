import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height: 80vh;
`

export const ErrorLines = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        color:${({theme})=>theme.colors.white};
        font-size:${({theme})=>theme.fontSizes.sub_medium} ;
        font-family: ${({theme})=>theme.fonts[1]};

        @media(max-width:820px){
            font-size:${({theme})=>theme.fontSizes.medium}
        }
    }

    p{
        color:${({theme})=>theme.colors.white};
        font-family: ${({theme})=>theme.fonts[1]};
        margin-top: 20px;
        text-align: center;
        opacity: 0.6;
    }

   
    img{
        @media(max-width:820px){
            height: 300px;
        }
    }

`

export const Button = styled.button`
        border:none;
        border-radius: 5px;
        margin-top: 20px;
        
        cursor: pointer;
        background-color:${({theme})=>theme.colors.orange};
        padding:10px;

        &:hover{
            background-color:${({theme})=>theme.colors.light_orange};
        }

        a{
            color:${({theme})=>theme.colors.black};
        }
        
`