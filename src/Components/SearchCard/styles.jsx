import styled from "styled-components";

export const ContainerRow = styled.div`
    width:100%;
    max-width:2110px;
    margin:auto;
 
    h2{
        width:87%;
        margin:30px auto;
    }
`

export const CardRow = styled.section`
    width:87%;
    margin:0 auto;
`

export const CardMovie = styled.div`
    border:3px solid ${({theme})=>theme.colors.secundary}; 
    border-radius: 10px;
    margin-top: 5px;
    display:flex;
    
    img{
        width: 150px;
        height:178px; 
        padding:5px;

        @media(max-width: 1035px){
         width:100px;
         height: 100px;
        }
    }
    h2{
        margin:0 auto;
    }
`

export const BoxImg = styled.div`
      span{
            display: none; //span que esta dentro do component TmdbImage
        }

        @media(max-width: 1035px){
            width:110px;
         
        }
        &:hover{
        opacity: 0.5;
        transition: all 0.3s ease; 
    }
`
export const MiddleBox = styled.div`
     a{
         color:${({theme})=>theme.colors.light_gray};
         font-size: 1.125rem;
         display:inline-block;
         
         &:hover{
             color:${({theme})=>theme.colors.red};
         }

    }

    span{
            overflow: hidden;
            text-overflow: ellipsis;
            padding-left:5px;
            display: -webkit-box;
            -webkit-box-orient: vertical; 

            @media(max-width: 1032px){
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
        }
    }
`

export const CardInfo = styled.div`
            color:${({theme})=>theme.colors.white};
            opacity:.6;
            margin-top: 20px;
            padding-left:5px;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical; 
            
            @media(max-width: 1032px){
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
        }
`