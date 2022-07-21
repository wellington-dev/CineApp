import styled from "styled-components";

export const ContainerCard = styled.div`

    width:100%;
    margin-top: -125px;
    height:100vh;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

  /* Fiz um ajuste no footer, porque quando ele vai pro modo mobile ele fica no meio das letras
  então eu dei esse media para se ajustar. */
    @media(max-width:485px){
        height:139vh;        
    }  
    @media(max-width:370px){
        height:155vh;        
    }  

`

export const CardVertical = styled.div`
    width:100%;
    height:100%;
    background: linear-gradient(to top, #111, transparent 100%);
`

export const CardHorizontal = styled.div`
    width:100%;
    height:100%;
    background: linear-gradient(to bottom, #000, transparent 100%);
`

export const CardRow = styled.section`
        width:100%;
        max-width:2110px;
        margin:auto;
`

export const CardListarea = styled.section`
       width:87%;
       margin:0 auto;
`

export const CardMovie = styled.div`
display: flex;

@media(max-width:1020px){
        display: block;
    }  
 
`

export const CardImg = styled.div`
    width:300px;
  
    @media(max-width:768px){
        margin:auto;
        max-width:200px;
    }  

    span{
        display: none; //span que esta dentro do component TmdbImage
    }

    img{
        margin-top: 200px;
        width:300px;
        
            @media(max-width:1020px){
            margin-top:130px;
            max-width:200px;
            height:280px;
        }
    }

`

export const Button = styled.button`
        display: block;
        margin-top:20px;
        padding:10px;

        outline: none;
        border:none;
        border-radius: 5px;

        cursor: pointer;
        background-color:${({theme})=>theme.colors.orange};
       
        &:hover{
            background-color:${({theme})=>theme.colors.light_orange};
        }
`

export const CardInfo = styled.section`
    margin:200px  30px;

    @media(max-width:1020px){
    margin:0px;
    } 
    
`
export const CardName = styled.h1`
  font-size: 40px;
  color:${({theme})=>theme.colors.white};
  font-family: ${({theme})=>theme.fonts[1]};
`

export const CardYear = styled.div`
    margin-top:20px;
    font-size: 20px;
    color:${({theme})=>theme.colors.white};
    display: flex;

    @media(max-width:415px){
        font-size: 16px;
        } 
    

    img{
        width:22px;
        margin: -1px ;
        margin:0px 10px ;

        @media(max-width:415px){
            width:13px;
        } 
    }

 
`
export const CardHour = styled(CardYear)`

`
export const CardVoteAverage = styled(CardHour)`
    margin:0px  15px ;
    margin-top: 20px;
`

export const CardBox = styled.div`
    display:flex;
    margin-bottom: 20px;
`
export const CardDescription = styled.span`

    font-family: ${({theme})=>theme.fonts[2]};
    font-size: 20px;
    color:${({theme})=>theme.colors.white};


    @media(max-width: 1024px){
        font-size: 13px;
        }
`
