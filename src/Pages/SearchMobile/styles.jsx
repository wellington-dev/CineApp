import styled from 'styled-components'
/* essa estilização foi modificada do component Search para o mobile (toggle) do Search */ 

export const Container = styled.div`
        width:100%;
        max-width:2110px;
        margin:auto;
`

export const AreaList = styled.div`
    width:87%;
    margin:0 auto;
`

export const MobileContainer = styled.div`
      
    input{
        display: none;

    @media(max-width: 1035px){
        display:${({searchMobileClick})=>searchMobileClick ? 'flex' : 'none'};
      
        }
    }

    button{
        display: none;
        
        @media(max-width: 1035px){
            display:${({searchMobileClick})=>searchMobileClick ? 'flex' : 'none'};
          
        }
        img{
                width:25px;
                height:25px;
            }
    }

`