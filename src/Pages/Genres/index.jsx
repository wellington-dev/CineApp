import React, {useState, useEffect} from 'react'

import genresApi from '../../Services/carouselAPIGenres'
import Carousel from '../../Components/Carousel'
import {Container, Section} from './styles'

function Genres() {

  const [moviesGenres, setMoviesGenres] = useState([])


  useEffect(()=>{
    const fetchList = async()=>{
      const res = await genresApi.getGenresList()
      setMoviesGenres(res)
      
    }
    fetchList()
  },[])


  return (
    <Container>
      {moviesGenres.length <= 0 &&  <div className='loading-genres'>
         <h1>Só um momento, estamos carregando os filmes para você! :D</h1>
      </div> }


      {moviesGenres.map((item, key)=>(
        <Section key={key}>
          <h2>{item.title}</h2>
            <Carousel item={item}/>
        </Section>
      ))}
    </Container>
  )
}

export default Genres