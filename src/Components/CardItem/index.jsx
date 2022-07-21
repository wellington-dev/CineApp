import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import requests from '../../Services/requests'
import {TmdbImage} from '../../assets/ImgTmdb'
import incosCalendario from '../../assets/iconsCalendario.png'
import iconsTime from '../../assets/iconsTime.png'
import {useMovies} from '../../Context/MovieContext'


import {ContainerCard, CardVertical, CardHorizontal,
        CardRow, CardListarea, CardImg, 
        Button, CardMovie, CardInfo, 
        CardYear, CardName, CardBox,CardHour, 
        CardVoteAverage,CardDescription } from './styles'




function CardItem() {
    const [detail, setDetail] = useState([])
    const { addToFavorites} = useMovies()
    
    const {id} = useParams()

    useEffect(()=>{
        const fetchId = async ()=>{
            setDetail(await requests.fetchMoviesList(id))        
        }
        fetchId()
    },[id])
    
    let firstDate = new Date(detail.release_date) 

  return (

    <ContainerCard   style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/original${detail.backdrop_path})`,}
    }>
 
 
      <CardVertical>
        <CardHorizontal>
          <CardRow>
            <CardListarea>

            <CardMovie>
                <CardImg>
                  <TmdbImage  movie={detail} />
                </CardImg>

                <CardInfo>
                  <CardName>{detail.title}</CardName>

            <CardBox>
                  <CardYear><img src={incosCalendario}/>{firstDate.getFullYear()}</CardYear>
                  <CardHour><img src={iconsTime}/>{detail.runtime} min</CardHour>
                  <CardVoteAverage>{detail.vote_average} pontos</CardVoteAverage>
            </CardBox>
            
            <CardDescription>{detail.overview}</CardDescription>
              <Button onClick={()=> addToFavorites(detail)}>Adicionar ao favoritos</Button>
                </CardInfo>

            </CardMovie>
            </CardListarea>

          </CardRow>

        </CardHorizontal>
      </CardVertical>
    
    </ContainerCard >
  )
}

export default CardItem