import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;

.swiper {
    width: 100%;
    height: 100%;
  
  }


  .swiper-slide {
    text-align: center;
  
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  
    img{
        display: inline-block;
        width: 100%;
        height: 100%;
        object-fit: cover;  
        
        &:hover{
            opacity: 0.5;
            transition: all 0.3s ease; 
        }

    }
`

export const Button = styled.button`
      position: absolute;
      top:0;
      left: 0;
      z-index: 5;
      
      width:40px;
      height:40px;
      
      cursor: pointer;
      background-color: ${({theme})=>theme.colors.transparent_black};
      
      border-radius:50px ;
      border: none;
      outline: none;

      &:hover{
             background-color:${({theme})=>theme.colors.medium_dark_of_green};
        }

        @media(max-width:600px){
            width:30px;
            height:30px;
        }
        
        img{
              width:25px;
              height:25px;
           
              @media(max-width:600px){
                  width:20px;
                  height:20px;
            }      
        }
`