import styled from "styled-components";

export const PageContainer = styled.div`
    width:87%;
    margin:0 auto;
    display:flex;
`


export const PaginationItem  = styled.button`
    cursor: pointer;
    overflow: hidden;
    
    margin: 30px 5px;
    width: 47px;
    height: 35px;
    
    border-radius: 5px;
    border:none;
    padding:5px 20px;
    
    background-color:${({theme})=>theme.colors.secundary};
    color:${({theme})=>theme.colors.white};
    transition: ease 0.3s all;

    &:hover{
        background:${({theme})=>theme.colors.black};
    }
   
${({isSelect})=>isSelect &&{
    background:'#000000 ',
    color:"#f00",
}}
`