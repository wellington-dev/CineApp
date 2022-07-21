import styled from "styled-components";


export const ErrorContainer = styled.div`
    width:100%;
    max-width:2110px;
    margin:auto;
`

export const ErrorInformation = styled.section`

    width:87%;
    margin:0 auto;

    color:${({theme})=>theme.colors.white};
    opacity: 0.6;
    font-family: ${({theme})=>theme.fonts[1]};

    h1{
        font-size:30px;
        padding:10px;

        @media(max-width: 1035px){
            font-size:20px;
        }
    }

    span{
        padding:10px;
        font-size:${({theme})=>theme.fontSizes.sub_small};
        font-weight: 800;

        @media(max-width: 1035px){
            font-size:18px;
        }
    }
`

export const GuideList = styled.ul`
 padding:15px 20px 5px 50px;
 
    li{
            list-style-type:disc;
            padding:5px 0px;
    }
`