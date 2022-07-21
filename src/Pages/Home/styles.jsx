import styled from 'styled-components'


export const MovieRow = styled.div`
    width:100%;
    max-width:2110px;
    margin:auto;
`

export const MovieRowListarea = styled.section`

    width:87%;
    margin:0 auto;

    h2{
        color:${({theme})=>theme.colors.white};
        font-family:${({theme})=>theme.fonts[1]};
        margin: 30px 0;   
    }
`