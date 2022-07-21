import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    max-width:2110px;
    margin:auto;

    .loading-genres{
        
        color:#fff;
        margin: 0 auto;
    }
`

export const Section = styled.section`
    width:87%;
    margin:0 auto;
    
    h2{
        color:#fff;
        font-family:${({theme})=>theme.fonts[1]};
        margin: 30px 0;
        
    }
`