import React, { useState, useEffect } from "react";
import tmdbApi from "../../Services/tmdbApi";
import FeatuedMovie from "./FeaturedMovie";

import Carousel from "../../Components/Carousel";
import {MovieRow, MovieRowListarea} from './styles'

function Home() {
    
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
      const loadAll = async()=>{
      let res = await tmdbApi.getHomeList()
      setMovieList(res)
    }
    
    loadAll()
  },[])
 
  
  return (
    <MovieRow>
      <FeatuedMovie />
     
        {movieList.map((item, key)=>(
          <MovieRowListarea key={key}>
            <h2>{item.title}</h2>

              <Carousel item={item} />
      
          </MovieRowListarea>
      ))}
    </MovieRow>
  );
}

export default Home;
