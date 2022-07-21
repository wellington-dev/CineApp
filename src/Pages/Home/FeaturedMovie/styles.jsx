import styled from "styled-components";

export const Featured = styled.section`
    width:100%;
    height:90vh;   

    @media(max-width: 510px){
            height:100%;
            margin: 50px 0px 160px 0px;
        }

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .loading{
        display:flex;
        justify-content: center;
        align-items: center;
       
        img{
            width:100%;
            margin: 0 auto;
            height:100%;

            @media(max-width: 510px){
                height:100%;
                margin: 50px 0px 160px 0px;
        }
        }
    }
`

export const FeaturedVertical = styled.div`
    width:100%;
    height:100%;
    background: linear-gradient(to top, #111419 5%, transparent 100%);
 
    @media(max-width: 510px){
        background: linear-gradient(to top, #111419 5%, transparent 80%);
            }

`


export const FeaturedHorizontal  = styled.div`
    width:100%;
    height:100%;
    display: flex;

    flex-direction: column;
    justify-content: center;
    background: linear-gradient(to bottom, #111419 5%, transparent 100%);

    @media(max-width: 510px){
        background: linear-gradient(to bottom, #111419 5%, transparent 80%);
            }
`


export const FeaturedRow = styled.section`
        width:100%;
        max-width:2110px;
        margin:auto;
`


export const FeaturedListarea = styled.section`
       width:87%;
       margin:0 auto;
`

export const FeaturedInfor = styled.section`
    font-size: 1.125rem; //18px
    margin-top: 20px; 

    img{
        width:25px;
        margin:-5px ;
        margin-right:10px ;

            @media(max-width: 1032px){
                margin:-2px ;
                margin-right:10px;
            }

       }
`


export const FeaturedName = styled.div`
    width:100%;
    max-width:700px;
    color:${({theme})=>theme.colors. light_gray};

    font-size: ${({theme})=>theme.fontSizes.sub_medium}; 
    font-family: ${({theme})=>theme.fonts[1]};
    text-transform:uppercase ;

    @media(max-width: 1032px){
        font-size:${({theme})=>theme.fontSizes.medium}; 
        }
`


export const FeaturedYear = styled.div`
    display: inline-block;
    margin-right: 15px;
    color:${({theme})=>theme.colors.white};
    opacity:.6;

   
`


export const FeaturedHour = styled(FeaturedYear)`

    @media(max-width: 1032px){
            font-size: 1rem;    /*16px*/            
        }

`

export const FeaturedVoteAverage = styled(FeaturedHour)`
  
`

export const FeaturedDescription = styled.div`
 width:100%;
 max-width:800px;
 margin-top: 20px;
 font-size: 1.3rem; /*20px*/

 color:${({theme})=>theme.colors.white};
 opacity:.6;
 font-family:${({theme})=>theme.fonts[2]} ;

            
        @media(max-width: 1032px){
            font-size: 1rem; /*16px*/

            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
        }

`


export const Button = styled.button`
margin-top: 20px;
padding:13px 15px;
border-radius: 50px;

font-size: 1.125rem; /*18px*/
font-family:${({theme})=>theme.fonts[2]};
color:${({theme})=>theme.colors.light_gray};


background-color:${({theme})=>theme.colors.primary};
overflow: hidden;
border: none;


transition: all 0.3s ease;
cursor: pointer;

    &:hover{
        background-color:${({theme})=>theme.colors.secundary};
    }

    img{
        width:35px;
        margin:-11px ;
        margin-right:6px ;
    }

    @media(max-width: 510px){
        background-color:#1f2533;
        /* background-color:#1f2736; */
        
        &:hover{
            background-color:#181d27;
        }
    }
`