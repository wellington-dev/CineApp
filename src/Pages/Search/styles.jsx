import styled from "styled-components"

export const SeacrhContainer = styled.div`

    z-index: 1;
    @media(max-width: 1035px){
        position: relative;
        background:${({theme})=>theme.colors.dark_blue};
        border-radius: 10px;
        }

`
export const Button = styled.button`
    
        width:45px;
        height:45px;
        background:${({theme})=>theme.colors.dark_blue};
        border: none;
        cursor:pointer;
        overflow: hidden;
        border-radius: 10px;

         img{
            width:25px;
            height:25px;
            margin:-9px 5px;

            @media(max-width: 1035px){
                margin:10px 10px;
            }
        }
        
        @media(max-width: 1035px){
            display: none;
        }
`
export const Form = styled.form`
       display:flex;
       justify-content: space-between;
       align-items: center;
  
       border-radius: 10px;
       background:${({theme})=>theme.colors.dark_blue};
       
    input{
 
        border: none;
        overflow: hidden;
        outline: none;
        background:${({theme})=>theme.colors.dark_blue};
     
        border-radius: 10px;
        color: ${({theme})=>theme.colors.text_input};
        padding: 15px 25px;
        padding-right: 10px;

        font-weight: 300;
        font-size:90%;
        z-index: 1;
        
        @media(max-width: 1035px){
            width: 100%;
            display: none;           
           
        }

    }
  
   
`