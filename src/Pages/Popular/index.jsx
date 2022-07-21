import React, {useEffect, useState} from 'react'
import api from '../../Services/api'
import requests from '../../Services/requests'
import Pagination from '../../Pagination'
import {useMovies} from '../../Context/MovieContext'
import {TmdbImage} from '../../assets/ImgTmdb'

import {Link} from 'react-router-dom'
import iconsFavorit from '../../assets/iconsFavorit.png'
import {ContainerPopular, PopularImg, MoviesPopular, Button} from './styles'


function Popular() {
 
  const [listPopular,setListPopular] = useState([])
  const [currentPagination,setCurrentPagination] = useState(1);

  const { addToFavorites} = useMovies()
  const {setSeacrhMobileClick} = useMovies()
    
  const getPopular = async(url)=>{
    const res = await api.get(url);
    setListPopular(res.data)
  }

  useEffect(() => {
    const allPopular = `${requests.fetchTrending}&page=${currentPagination}`;
    getPopular(allPopular);
  }, [currentPagination]);

  useEffect(()=>{
    setCurrentPagination(1)
  },[])

  const disableInput = ()=>{
    setSeacrhMobileClick(false)
    }

  return (
    <ContainerPopular>
      {listPopular.results && 
        <MoviesPopular>
          {listPopular.results.map((list)=>(

            <PopularImg key={list.id}>
              <Link to={`/cardItem/${list.id}`} onClick={disableInput}>
                <TmdbImage movie={list}/>
              </Link>

              <Button onClick={() =>addToFavorites(list)}>
                <img src={iconsFavorit} alt='Icone de filmes favotitos'/>
              </Button>
            </PopularImg>
            
          ))}
            <Pagination pages={setCurrentPagination} items={listPopular} current={currentPagination}/>
      </MoviesPopular>
      }
    </ContainerPopular>
  )
}

export default Popular