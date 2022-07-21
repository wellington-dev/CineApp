import styled from "styled-components"


export const MenuContainer = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;

    list-style:none;
    z-index: 99;

    a{      
        display:block;
        color:${({theme})=>theme.colors.white};
        padding:10px 10px;
        opacity:.6;

        &:hover{
                opacity:1;
        }
        &.active{
           color:${({theme})=>theme.colors.white};
           opacity:1;
           border-radius:50px;
           background-color:${({theme})=>theme.colors.secundary};
        
       }
    }   
  

   @media(max-width: 1035px){
       
    a{
        margin: -15px 0px;
    }

    position:fixed;
    top:${({theme})=>theme.fontSizes.large};
    left:0;
    right:0;
    bottom:0;

    width:100vw; 
    height: 100vh;
    transform:${({click})=>click ? 'translateY(0)' : 'translateY(100%)'};
    transition: all 0.3s ease;   

    background-color:${({theme})=>theme.colors.secundary};
    flex-direction:column;
    justify-content:center;

    a.active{
       color:${({theme})=>theme.colors.white};
       opacity:1;
       border-radius:50px;
       background-color:${({theme})=>theme.colors.primary} ;
   }
      }   
`

export const MenuItem = styled.li`
    margin:0 5px;
   
    font-weight:100;
    font-size:20px;
    color:${({theme})=>theme.colors.white};
    
    img{
        width:30px;
        height:30px;
        margin:-10px 5px;
    }

    @media(max-width: 1035px){
        margin: ${({theme})=>theme.fontSizes.medium}  0;
    }
`