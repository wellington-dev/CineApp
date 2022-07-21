import React from 'react'

import {TmdbImage} from '../../assets/ImgTmdb'
import {Link} from 'react-router-dom'
import iconsFavorit from '../../assets/iconsFavorit.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";

import {useMovies} from '../../Context/MovieContext'
import {Container, Button} from './styles'

function Carousel({item}) {
  const {addToFavorites} = useMovies()
  
 
  return (
    <Container>
    <Swiper
        slidesPerView={1}
        spaceBetween={13}
        slidesPerGroup={3}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        
        breakpoints={{
            200: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            674: {
            slidesPerView: 4,
            spaceBetween: 10,
            },
            820: {
            slidesPerView: 6,
            spaceBetween: 10,
            },
        }}  >


        {item.items.results.length > 0 && item.items.results.map((fil)=>(  
           
                <SwiperSlide  key={fil.id} >

                    <Link to={`/cardItem/${fil.id}`}>
                      <TmdbImage movie={fil} key={fil.id}/>
                    </Link>
                    
                    <Button onClick={() =>addToFavorites(fil)}> 
                      <img src={iconsFavorit} alt='icone de filmes favotitos'/>
                    </Button>
                 
                </SwiperSlide>
              ))}
    </Swiper>
    </Container>
  )
}

export default Carousel