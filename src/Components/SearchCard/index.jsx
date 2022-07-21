import React, {useEffect} from 'react'
import {useMovies} from '../../Context/MovieContext'
import {TmdbImage} from '../../assets/ImgTmdb'
import {Link, useSearchParams} from 'react-router-dom'
import NoResults from './NoResults'
import Pagination from '../../Pagination'
import api from '../../Services/api'
import requests from '../../Services/requests'


import {ContainerRow, CardRow, CardMovie, BoxImg,MiddleBox,CardInfo} from './styles'

function SearchCard() {
  const {moviesList, setMoviesList} = useMovies(); 
  const {currentPage,setCurrentPage} = useMovies(); 
  const {setSeacrhMobileClick} = useMovies()

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")


  const getSearch = async(url)=>{
    const res = await api.get(url);
    setMoviesList(res.data)
  }

  useEffect(() => {
    const searchWithQueryURL = `${requests.fetchSearch}${query}&page=${currentPage}`;
    getSearch(searchWithQueryURL);
  }, [query, currentPage]);

 const disableInput = ()=>{
  setSeacrhMobileClick(false)
  }

  return (
    <ContainerRow >
      
      <h2 style={{color:'white'}}>Resultados encontrados: {query}</h2>
   
      {moviesList.results && 
      <div>
        {moviesList.results.map((mov)=>(
          <CardRow key={mov.id}>

              <CardMovie>
                  <BoxImg onClick={disableInput}>
                    <Link to={`/cardItem/${mov.id}`}>
                        <TmdbImage movie={mov}/>
                    </Link>
                  </BoxImg>

                  <MiddleBox>   
                    <Link onClick={disableInput} to={`/cardItem/${mov.id}`}>
                        <span>{mov.title}</span>
                    </Link>
            
                      <CardInfo>{mov.overview}</CardInfo>
                  </MiddleBox>
              
              </CardMovie>
          </CardRow>
          ))}

          <NoResults/>
          <Pagination pages={setCurrentPage} items={moviesList} current={currentPage} />
      </div>
      }
    </ContainerRow>
  )
}

export default SearchCard