import React from 'react'

function ImgCard({movie}) {
  return (

    <div>
{/* <img src={fil.volumeInfo.imageLinks.thumbnail} alt={fil.volumeInfo.title}/> */}
 
    <section>
    
    {movie.poster_path ? (
         <img
             src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
             alt={`${movie.title} Poster`}
           />
         ) : (
            <img 
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"
              alt={movie.title}
            />
         )}
      
    </section>
      {/* <span>{movie.volumeInfo.title || movie.name}</span> */}
  
  </div>
  )
}

export default ImgCard