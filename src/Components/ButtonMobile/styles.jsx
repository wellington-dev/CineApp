import styled from "styled-components"

export const Button = styled.button`
        display: none;
        width:45px;
        z-index: 1;
        
        background:transparent;
        border: none;
        cursor:pointer;
        overflow: hidden;
        border-radius: 10px;

        
         img{
            width:25px;
            height:25px;
            margin:10px 10px;
        }

        @media(max-width: 1035px){
            display: flex;
        }
`
export const Section = styled.div`

        @media(max-width:1035px){
        width: 100%; 
        display: flex;   
        justify-content: flex-end;
        align-items: center;
    }
`
