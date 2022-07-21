import React from "react"
import inconHome from "../../assets/inconHome.png"
import iconCine from "../../assets/iconCine.png"
import iconGenero from "../../assets/iconsGenero.png"
import iconsFavorit from "../../assets/iconsFavorit.png"
import {NavLink } from "react-router-dom"
import { useMovies } from "../../Context/MovieContext"

import {MenuContainer, MenuItem} from "./styles"


function Menu() {
  const {click, setClick} = useMovies()
  const {setSeacrhMobileClick} = useMovies()

  const closeMenuDisableInput = ()=> {
    setClick(false)
    setSeacrhMobileClick(false)
  }


  return (
    
    <MenuContainer click={click}>

    
        <MenuItem><NavLink to='/' onClick={closeMenuDisableInput}>
          <img src={inconHome} alt='Imagem da do home tela principal' />Home
          </NavLink>
        </MenuItem>

        <MenuItem><NavLink to='popular' onClick={closeMenuDisableInput}>
          <img src={iconCine} alt='Icone popular de filmes' />Popular
          </NavLink>
        </MenuItem> 

        <MenuItem><NavLink to='genres' onClick={closeMenuDisableInput}>
          <img src={iconGenero} alt='Icone de generos de filmes' />Gêneros 
           </NavLink>
          </MenuItem>

        <MenuItem>
          <NavLink to='favorites'  onClick={closeMenuDisableInput}>
          <img src={iconsFavorit} alt='Icone de filmes favotitos'/> Favoritos
           </NavLink>
          </MenuItem>
      

    </MenuContainer>    

  )
}

export default Menu
