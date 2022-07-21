import React, {useState, useEffect} from 'react'

import { toast } from "react-toastify"
import {TmdbImage} from '../../assets/ImgTmdb'
import DeleteMovie from '../../assets/DeleteMovie.png'
import {Link} from 'react-router-dom'

import {FavoriteContainer, FavoriteListarea, FavoriteImg, Button} from './styles'

function Favorites() {
   
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        setMovie(JSON.parse(localStorage.getItem("cineApp")) || []);
    },[])


const deleteMovie = (id)=>{
  let filterMovies = movie.filter((item) => {
      return(item.id !== id)
  })
  setMovie(filterMovies);
  localStorage.setItem("cineApp", JSON.stringify(filterMovies));
  toast.success("Filme removido da lista!")
}


  return (
    <FavoriteContainer>
        <FavoriteListarea>

    {movie.length === 0 && <span className='add-the-movie'>Você precisa salvar filmes na sua lista!</span>}


    {movie.map((fil) => ( 
            <FavoriteImg key={fil.id}>           
                <Link to={`/cardItem/${fil.id}`}>
                    <TmdbImage  movie={fil} />    
                </Link>
             
                <Button onClick={()=>deleteMovie(fil.id)}>
                   <img src={DeleteMovie} alt={fil.title}/>
                </Button>
            </FavoriteImg>
        
    ))}
        </FavoriteListarea>
      
    </FavoriteContainer>
  )
}

export default Favorites