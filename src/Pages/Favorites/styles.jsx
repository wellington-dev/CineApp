import styled from "styled-components";

export const FavoriteContainer = styled.div`
    width:100%;
    max-width:2110px;
    margin:auto;

    flex-grow:1;
`
export const FavoriteListarea = styled.section`
    width:87%;
    margin:0 auto;

    .add-the-movie{
        color:${({theme})=>theme.colors.white};
        font-size: ${({theme})=>theme.fontSizes.medium};
        font-family: ${({theme})=>theme.fonts[0]};
    }
`


export const FavoriteImg = styled.div`
    position: relative;
    display:inline-block;
    margin: 0 auto;

    margin-top:50px;
    cursor: pointer;
   
   img{
        border-radius: 10px;
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
      background-color:${({theme})=>theme.colors.transparent_black};
      
      border-radius:50px ;
      border: none;
      outline: none;

      &:hover{
            background-color:${({theme})=>theme.colors.light_red};
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