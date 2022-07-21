import React, {createContext, useContext, useState, useEffect} from 'react'
import { toast } from 'react-toastify';

const MoviesContext = createContext()

function MoviesProvider({children}) {

  
    const [moviesList, setMoviesList] = useState([]); 
    const [click, setClick] = useState(false) 
    const [searchMobileClick, setSeacrhMobileClick] = useState(false) 
    const [currentPage,setCurrentPage] = useState(1); 
  
   


  const  addToFavorites = (item)=>{
    //aqui converto para array?, caso não exista essa lista, cria uma vazia
    const myList = JSON.parse(localStorage.getItem("cineApp")) || [];
  
    //verificar se o filme já está salvo. Utiliza o método some que irá verificar se no array existe pelo menos um item igual ao que você está comparando.
    const hashFilme = myList.some((savedMovie) => savedMovie.id === item.id)

    if(hashFilme){
      toast.warn("Esse filme ja esta na lista");
               return;
           }

    myList.push(item);
    localStorage.setItem("cineApp", JSON.stringify(myList));
    toast.success("Filme salvo com sucesso.");
}


  return (
    <MoviesContext.Provider
        value={{
            click, setClick,
            searchMobileClick,
            setSeacrhMobileClick,
            moviesList,
            setMoviesList,
            currentPage,
            setCurrentPage,
             addToFavorites,
            }}>
        {children}
    </MoviesContext.Provider>

  )
}

export const useMovies = ()=>useContext(MoviesContext)

export default MoviesProvider