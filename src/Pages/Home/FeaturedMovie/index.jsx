import React, {useState, useEffect} from 'react'

import tmdbApi from '../../../Services/tmdbApi'

import incosCalendario from '../../../assets/iconsCalendario.png'
import iconsTime from '../../../assets/iconsTime.png'
import iconsPlay from '../../../assets/iconsPlay.png'

import {Link} from 'react-router-dom'

import {Featured,
       FeaturedVertical,
       FeaturedHorizontal,
       FeaturedRow,
       FeaturedListarea,
       FeaturedName,
       FeaturedInfor,
       FeaturedYear,
       FeaturedHour,
       FeaturedDescription,
       FeaturedVoteAverage,
       Button} from './styles'


       
function FeatuedMovie() {
  
  const [bannerData, setBannerData] = useState([]);
 
  useEffect(()=>{

      const loadBanner = async()=>{
      
      let res = await tmdbApi.getHomeList()
    
      let popular = res.filter(movies => movies.name === 'popular')
      let randomChosen = Math.floor(Math.random() * (popular[0].items.results.length -1));
      let chosen = popular[0].items.results[randomChosen];
      let chosenInfo = await tmdbApi.getMovieInfo(chosen.id, 'movie');
      setBannerData(chosenInfo)
     
    }
    
    loadBanner()
  },[])

  let firstDate = new Date(bannerData.release_date)

    
  return (
    
    <Featured  style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/original${bannerData.backdrop_path})`,}
    }>

  {bannerData.length <= 0 &&  <div className='loading'>
      <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='carregando'/>
      </div> }



    <FeaturedVertical>
      <FeaturedHorizontal>
        <FeaturedRow>
          <FeaturedListarea>

        <FeaturedName><h1>{bannerData.title}</h1></FeaturedName>

          <FeaturedInfor>

            <FeaturedYear><img src={incosCalendario}/>{firstDate.getFullYear()}</FeaturedYear>
            <FeaturedHour><img src={iconsTime}/>{bannerData.runtime} min</FeaturedHour>
            <FeaturedVoteAverage>{bannerData.vote_average} pontos</FeaturedVoteAverage>
            <FeaturedDescription>{bannerData.overview}</FeaturedDescription>
          </FeaturedInfor>

            <Link to={`/cardItem/${bannerData.id}`}>
              <Button><img src={iconsPlay} alt={`${bannerData.title}`}/>Assistir</Button>
            </Link>

          </FeaturedListarea>
        </FeaturedRow>
      </FeaturedHorizontal>
    </FeaturedVertical>
    
    </Featured>

  )
}

export default FeatuedMovie