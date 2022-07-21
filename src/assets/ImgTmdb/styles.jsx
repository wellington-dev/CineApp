import styled from "styled-components";

export const ContainerImg = styled.div`
 
    display:flex;
    flex-direction:column;
    
    span{
        width: 170px; 
        white-space: nowrap;
        overflow: hidden;
        
        text-overflow: ellipsis;
        font-weight:bold;
        color:rgba(255,255,255,.7);

    &:hover{
        color:#fff;
    }
    @media(max-width:1020px){
        width:100px;
    } 
 }
       
    img{
        border-radius: 10px;
    }
 `
