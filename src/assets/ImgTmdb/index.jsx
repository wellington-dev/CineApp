import React from "react";
import {ContainerImg} from './styles';


export function TmdbImage({movie}) {
 

  return (
    <ContainerImg>
      
        {movie.poster_path ? (
         <img
             src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
             alt={`${movie.original_title}`}
           />
         ) : (
            <img 
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"
              alt={movie.title}
            />
         )}
      
        <span>{movie.title || movie.name}</span>
    
    </ContainerImg>
  );
}