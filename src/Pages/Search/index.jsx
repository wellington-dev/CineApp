import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import iconsSeacrh from '../../assets/iconsSeacrh.png'
import {useMovies} from '../../Context/MovieContext'

import {SeacrhContainer, Form, Button} from "./styles"

function Search() {

  const navigate = useNavigate();
 
  const [searchMovies, setSearchMovies] = useState(''); 
  const {setCurrentPage} = useMovies();   
 
 const handleClick = (event)=>{
    event.preventDefault()

    if(searchMovies.trim() === "") {
      return;
    }
    
    navigate(`/searchCard?q=${searchMovies}`)
    setSearchMovies('')
    // ao clicar nessa function ele retorna do inicio da minha paginação
    setCurrentPage(1)  
  }
 

 return (
    <SeacrhContainer>    
    <Form onSubmit={handleClick}>
      <input type='text' value={searchMovies}
       placeholder="Search..." onChange={(e)=>setSearchMovies(e.target.value)} />

      <Button><img src={iconsSeacrh} alt='icone de pesquisa' /></Button>
    </Form>
    </SeacrhContainer>
  )
}

export default Search