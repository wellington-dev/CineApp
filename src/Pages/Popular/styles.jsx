import styled from "styled-components";

export const ContainerPopular = styled.div`
    width:100%;
    max-width:2110px;
    margin:auto;
`

export const MoviesPopular = styled.section`
    width:87%;
    margin:0 auto;
`

export const PopularImg = styled.div`
position: relative;
display: inline-block; 
flex-wrap: wrap;
margin: 0 auto;

margin-top:50px;
cursor: pointer;

   
img{
       
        width:100%;
        height:258px;  
        padding:5px;
        
        &:hover{
            opacity: 0.5;
            transition: all 0.3s ease;
        }

        @media(max-width: 1210px){
         width:100%;
         height: 200px;
        }
        @media(max-width: 1035px){
         width:100%;
         height: 155px;
        }
        @media(max-width: 370px){
         width:100%;
         height: 140px;
        }

    }
`

export const Button = styled.button`
      position: absolute;
      top:0;
      z-index: 5;
      
      width:40px;
      height:40px;
      margin:5px;
      
      cursor: pointer;
      background-color: ${({theme})=>theme.colors.transparent_black};
      
      border-radius:50px ;
      border: none;
      outline: none;

      &:hover{
            background-color: ${({theme})=>theme.colors.medium_dark_of_green};
        }

        @media(max-width:600px){
            width:30px;
            height:30px;
        }
      
        
        img{
              width:40px;
              height:40px;
           
              @media(max-width:600px){
                  width:30px;
                  height:30px;
            }      
        }
        
`